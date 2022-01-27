import React from "react";
import ReactDOM from 'react-dom';
import moment from "moment"
import CommentList from "./CommentList";

class Article extends React.Component {
    state = {
        boolean: false
    }
    showArticle = () => {
        this.setState(state => ({
            boolean: !state.boolean
        }));
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="card-body align-items-start">
                        <div className="mb-0 d-flex justify-content-between">
                            <a href="#" onClick={this.showArticle}>
                                <h4 className="fw-bold text-info d-block">{this.props.article.title}</h4>
                            </a>
                        </div>
                        <div className="mb-1 text-muted">{moment(this.props.article.date).format('MMMM D, YYYY')}</div>
                        {!this.state.boolean ?
                            null
                            :
                            <div className="collapse show">
                                <p className="card-text my-3 text-secondary">{this.props.article.text}</p>
                                <div className="my-3 bg-body">
                                    <CommentList comments={this.props.article.comments} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Article
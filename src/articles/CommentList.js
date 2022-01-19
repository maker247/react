import React from "react"
import Comment from "./Comment"

function Showcomment(props) {
    if (!props.data.state.boolean) {
        return null;
    }

    return (
        <div className="collapse show">
            {props.data.props.comments !== undefined ? props.data.props.comments.map((item, index) => (
                <Comment comment={item} key={index} />
            )) : <h5 className="text-secondary mt-3">no comment yet!</h5>}
        </div>
    );
}

class CommentList extends React.Component {
    state = {
        boolean: false
    }
    showComment = () => {
        this.setState(state => ({
            boolean: !state.boolean
        }));
    }
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between border-bottom">
                    <a href="#" onClick={this.showComment} className="align-items-center rounded collapsed" data-bs-toggle="collapse">
                        <h6 className="pb-2 mb-0 text-primary">{this.state.boolean ? 'hide comments' : 'show comments'}</h6>
                    </a>
                </div>
                <Showcomment data = {this} />
            </div>
        )
    }
}

export default CommentList
import React, {useContext} from "react";
import moment from "moment"
import CommentList from "./CommentList";

const Article = (props) => {
    return (
        <div className="col-md-12" key={props.article.id}>
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                <div className="card-body align-items-start">
                    <div className="mb-0 d-flex justify-content-between">
                        <a href="#" onClick={() => props.showArticle(props.article)}>
                            <h4 className="fw-bold text-info d-block">{props.article.title}</h4>
                        </a>
                    </div>
                    <div className="mb-1 text-muted">{moment(props.article.date).format('MMMM D, YYYY')}</div>
                    {!props.article.showArticle ?
                        null
                        :
                        <div className="collapse collapsed show">
                            <p className="card-text my-3 text-secondary">{props.article.text}</p>
                            <div className="my-3 bg-body">
                                {!props.article.comments ? 
                                <h5>No comment yet!</h5>
                                :
                                <CommentList key={`${props.article.id}-List`} comments={props.article.comments} articleId={props.article.id} showComments={props.article.showComments} />
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Article
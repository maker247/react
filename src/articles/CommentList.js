import React, { useContext } from "react"
import context from "./context"
import Comment from "./Comment"

const CommentList = (props) => {
    const {showComments} = useContext(context);
    return (
        <div>
            <div className="d-flex justify-content-between border-bottom">
                <a href="#" className="align-items-center rounded collapsed" onClick={() => showComments(props.articleId)} data-bs-toggle="collapse">
                    <h6 className="pb-2 mb-0 text-primary">{props.showComments ? 'hide comments' : 'show comments'}</h6>
                </a>
            </div>
            {props.showComments ?
            props.comments.map((comment, index) => (
            <div className="">
                <Comment key={index} comment={comment}/>
            </div>
            ))
            :
            null
            }
        </div>
    )
    
}

export default CommentList
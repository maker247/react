import Comment from "./Comment"
function CommentList(props) {
    return (
        <div>
            <div className="d-flex justify-content-between border-bottom">
                <h6 className="pb-2 mb-0 text-dark">Recent comments</h6>
                <div className="continueLink pb-2 mb-0 d-block">
                    <a href="#" className="btn btn-info text-white align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={`#commentList-${props.index}`} aria-expanded="false">view comments</a>
                </div>
            </div>
            <div className="collapse" id={`commentList-${props.index}`}>
                {props.comments !== undefined ? props.comments.map((item, index) => (
                    <Comment comment={item} key={index} />
                )) : <h5 className="text-secondary mt-3">no comment yet!</h5>}
            </div>
        </div>
    )
}

export default CommentList
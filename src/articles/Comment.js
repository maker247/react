function Comment(props) {
    return (
        <div className="d-flex text-muted border-bottom pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
            <p className="pb-3 mb-0 small lh-sm">
                <strong className="d-block text-gray-dark pb-2">{props.comment.user}</strong>
                {props.comment.text}
            </p>
        </div>
    )
}
export default Comment
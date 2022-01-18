import moment from "moment"
import './css/sidebar.css';
import './js/sidebar.js';
import CommentList from "./CommentList";

function Article(props) {
    return (
        <div className="col-md-12">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                <div className="card-body align-items-start">
                    <div className="mb-0 d-flex justify-content-between">
                        <h4 className="fw-bold text-info d-block">{props.article.title}</h4>
                        <div className="continueLink d-block">
                            <a href="#" className="btn btn-info text-white align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={`#article-${props.index}`} aria-expanded="false">view</a>
                        </div>
                    </div>
                    <div className="mb-1 text-muted">{moment(props.article.date).format('MMMM D, YYYY')}</div>
                    <div className="collapse" id={`article-${props.index}`}>
                        <p className="card-text my-3 text-secondary">{props.article.text}</p>
                        <div className="my-3 bg-body">
                            <CommentList comments={props.article.comments} index={props.index} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
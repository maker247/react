import Article from "./Article"

function ArticleList(props) {
    return (
        <div className="row">
            {props.articles.map((item, index) => (
                <Article article={item} key={item.id} index={index} />
            ))}
        </div>
    )
}

export default ArticleList
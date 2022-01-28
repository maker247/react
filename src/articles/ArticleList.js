import React, {useContext} from "react"
import Article from "./Article";
import context from "./context";

const ArticleList = () => {
    const {articles, showArticle} = useContext(context)
    
    return (
        <div className="row">
            {articles.map((article, index) => (
            <Article key={article.id} article={article} showArticle={showArticle} />
            ))}
        </div>
    )
}

export default ArticleList
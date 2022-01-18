import react from "react";
import { articles } from "./data";
import ArticleList from "./ArticleList";

class App extends react.Component {
    state = {
        articles: articles,
    }

    render() {
        return (
            <div className="container">
                <header className="text-info text-center text-decoration-underline fs-2 py-5">React Articles</header>
                <ArticleList articles = {this.state.articles} />
            </div>
        )
    }
}
export default App
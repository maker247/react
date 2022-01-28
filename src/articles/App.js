import React, {useContext, useReducer} from "react";
import context from "./context";
import ArticleList from "./ArticleList";
import { articles } from "./data";

const appReducer = (state, action) => {
    switch(action.type) {
        case 'article':
            return state.map((article) => {
                if(article.id === action.payload.id) {
                    return { ...article, showArticle: !article.showArticle };
                } else {
                    return {...article, showArticle: false};
                }
            });

        case 'comment':
            return state.map((article) => {
                if(article.id === action.payload) {
                    return { ...article, showComments: !article.showComments };
                } else {
                    return {...article, showComments: false};
                }
            });

        default:
            return state;
    }
}

const App = () => {
    const initialState = useContext(context);
    const [articles, dispatch] = useReducer(appReducer, initialState);

    const showArticle = (article) => dispatch({
        type: 'article',
        payload: article
    })

    const showComments = (article_id) => dispatch({
        type: 'comment',
        payload: article_id
    })

    return (
        <context.Provider value={{
            articles,
            showArticle,
            showComments,
        }}>
        <div className="container">
            <header className="text-info text-center text-decoration-underline fs-2 py-5" >React Articles</header>
            <ArticleList />
        </div>
        </context.Provider>
    )
}
export default App
import { createContext } from "react";
import { articles } from "./data";

const initialState = articles.map((article) => {
    return {
        ...article,
        showArticle: false,
        showComments: false
    }
});

export default createContext(initialState);
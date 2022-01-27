import {createContext} from "react";

const initialState = {
    rows: [
        {id: 1, name: 'user-1', age: 20, gender: 'male'},
        {id: 2, name: 'user-2', age: 23, gender: 'female'},
        {id: 3, name: 'user-3', age: 25, gender: 'male'},
    ]
};

export default createContext({initialState});






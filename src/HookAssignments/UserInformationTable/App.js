import React, {useContext, useReducer} from "react";
import Table from "./Table";
import context from "./context";

const appReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ROWS":
            let gender = ['male', 'female']
            let id = state.rows.length;
            id++;
            return {
                ...state,
                rows: [...state.rows, {id: id, name: `user-${id}`, age: 20+id, gender: gender[Math.round(Math.random())]}],
            };

        case "DEL_ROWS":
            return {
                ...state,
                rows: state.rows.filter((row) => row.id !== action.payload)
            }

        default:
            return state;
    }
}

const App = () => {
    const {initialState} = useContext(context);

    const [state, dispatch] = useReducer(appReducer, initialState);

    const addRows = () => dispatch({
        type: "ADD_ROWS",
        payload: null
    });

    const delRows = (row) => dispatch({
        type: "DEL_ROWS",
        payload: row,
    });

    return(
        <context.Provider
            value={{
                rows: state.rows,
                addRows,
                delRows
            }}
        >
            <div className="container">
                <h1 className="text-info text-center py-4">React User Information Table</h1>
                <div className="row">
                    <div className="col-md-12">
                        <Table />
                    </div>
                </div>
            </div>
        </context.Provider>
    )
}

export default App
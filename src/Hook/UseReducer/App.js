import { useReducer } from "react";

// No.2
const initialTodos = [
    {
        id: 1,
        title: 'todo 1',
        complete: false,
    },
    {
        id: 2,
        title: 'todo 2',
        complete: false,
    }
];

// No.3
const reducer = (state, action) => {
    switch(action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default: 
            return state;
    }
}

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    //return [state, dispatch] No.4

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
        // action put as obj
    }

    return (
        <>
        <h1>Hello React</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    )
}

export { Todos as App }
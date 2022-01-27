import { useCallback, useState } from "react";
import Todos from "./Todos";

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c+1);
    };

    // const addTodo = () => {
    //     setTodos((t) => [...t, 'New Todo']);
    // }

    const addTodo = useCallback(() => {
        setTodos((todo) => [...todo, "new Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

export default App

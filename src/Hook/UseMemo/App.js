import { useMemo, useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    
    // const total = sum(count);

    const total = useMemo(() => sum(count), [count]);

    const increment = () => {
        setCount((c) => c+1);
    };

    const addTodo = () => {
        setTodos((t) => [...t, 'New Todo']);
    }

    return (
        <>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => (
                    <p key={index}>{todo}</p>
                ))}
                <button onClick={addTodo}>Add Todo</button>
                <hr />
            </div>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Total: {total}</h2>
            </div>
        </>
    )
}

const sum = (num) => {
    console.log("Calculating...");
    for(let i = 0; i < 1000; i++) {
        num += 1;
    }
    return num;
}

export default App

import { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 1000)
    // })

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 1000)
    // }, [])

    const onCalculate = useEffect(() => {
        setCalculation(() => count*2)
    }, [count])

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((c) => c+1)}>add</button>
            <p>Calculation: {calculation}</p>
        </>
    )
}

export default Timer
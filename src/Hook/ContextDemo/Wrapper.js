import { useContext } from "react"
import context from "./context"

const Wrapper = () => {
    const { name } = useContext(context)
    return (
        <>
            <h1>Wrapper</h1>
        </>
    )
}

export default Wrapper
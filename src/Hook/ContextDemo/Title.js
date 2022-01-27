import { useContext } from "react"
import context from './context'

const Title = props => {
    // No.4
    const { name, title } = useContext(context)
    return (
        <>
            <h1>{title}</h1>
            <h2>{name}</h2>
        </>
    )
}
export default Title
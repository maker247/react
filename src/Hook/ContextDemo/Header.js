import Title from './Title'
import context from './context'
import { useContext } from 'react'

const Header = props => {
    const { name } = useContext(context)
    return (
        <>
            <h1>{name}</h1>
            <Title />
        </>
    )
}
export default Header
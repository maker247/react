import { useContext } from 'react'
import Header from "./Header";
// import Row from "./Row";
import context from "./context"

const Table = (props) => {
    const { item } = useContext(context)
    console.log(item)
    return (
        <table className="table">
            <Header />
            <tbody>
                {/* {props.items.map((item, index) => (
                    <Row item={item} key={index} />
                ))} */}
            </tbody>
        </table>
    )
}

export default Table

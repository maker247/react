import Header from "./Header";
import Row from "./Row";

function Table(props) {
    return (
        <table className="table">
            <Header />
            <tbody>
                {props.items.map((item, index) => (
                    <Row item={item} key={index} />
                ))}
            </tbody>
        </table>
    )
}

export default Table

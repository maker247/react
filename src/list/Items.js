import react from "react"

class Items extends react.Component {
    render() {
        return (
                <ul className="list-group">
                    {this.props.items.map((item, index) => (
                        <li key={index} className="list-group-item">{item.name} - {item.price}</li>
                    ))}
                </ul>
        )
    }
}

export default Items
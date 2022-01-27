import react from "react"

const Item = (props) => {
    const {item} = props
    return (
        <li className="list-group-item">{item.name} - {item.price}</li>
    )
}

export default Item
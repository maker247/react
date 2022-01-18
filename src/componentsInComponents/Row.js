function Row(props) {
    return (
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
        </tr>
    )
}

export default Row

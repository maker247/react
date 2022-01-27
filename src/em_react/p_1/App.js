import React from "react";
import Item from "./Item";

const App = props => {
    let [ items, setItems ] = React.useState([
        { id: 1, name: 'Apple', price: 0.99 },
        { id: 2, name: 'Orange', price: 0.88 },
        { id: 3, name: 'Grape', price: 1.00 },
    ])

    let add = () => {
        setItems([
            ...items,
            { id: 4, name: 'Banana', price: 0.75 }
        ]);
    }
    return (
        <div>
            <ul>
                {items.map(i => <Item name={i.name} price={i.price} />)}
            </ul>
        </div>
    )
}


export default App
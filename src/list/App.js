import {react, useState} from "react";
import Item from "./Items";

const App = () => {
    const [items, setItems] = useState([
        {id: 1, name: 'Apple', price: '500$'},
        {id: 2, name: 'Orange', price: '300$'},
        {id: 3, name: 'PineApple', price: '800$'}
    ])

    const onAdd = () => {
        let id = items.length + 1;
        setItems([...items, {id, name: `Item ${id}`, price: 100 * id}]);
    }

    return (
        <div className="container">
            <div className="row m-auto">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between py-5">
                        <h1>Hello, React!</h1>
                        <button className="btn btn-info" onClick={onAdd}>Add item</button>
                    </div>
                    <ul className="list-group">
                        {items.map((item, index) => (
                            <Item key={item.id} item={item} />
                        ))} 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App
import React, { createContext, useContext, useState } from 'react'
import Table from "./Table";
import context from './context';

const App = () => {
    const [items, setItems] = useState([
        {id: 1, name: 'Apple', price: '500$'},
        {id: 2, name: 'Orange', price: '300$'},
        {id: 3, name: 'Mango', price: '400$'}
    ])

    const onAdd = () => {
        let id = items.length + 1;
        setItems([...items, {id, name: `Item ${id}`, price: `${100 * id}$`}]) 
    }

    return (
        <div className="container mt-5">
            <div className="row m-auto">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                    <h1 className="text-info">Fruit Table</h1>
                    <button type="button" id="AddItem" className="btn btn-info text-white" onClick={onAdd}>Add Item</button>
                </div>
                </div>
                <div className="col-md-12 mt-3">
                <context.Provider value={{ items }}>
                    {/* No.3 */}
                    <Table />
                </context.Provider>
                </div>
            </div>
        </div>
    )
}

export default App;
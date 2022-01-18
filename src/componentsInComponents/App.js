import React from "react";
import Table from "./Table";

class App extends React.Component {
    state = {
        items: [
            {id: 1, name: 'Apple', price: '500$'},
            {id: 2, name: 'Orange', price: '300$'},
            {id: 3, name: 'Mango', price: '400$'}
        ]
    }
    
    onAdd = () => {
        let id = this.state.items.length + 1;
        this.setState({
            items: [...this.state.items, {id, name: `Item ${id}`, price: `${100 * id}$`}]
        })
    }

    onShow = (message) => {
        alert(message);
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row m-auto">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between">
                        <h1 className="text-info">Fruit Table</h1>
                        <button type="button" id="AddItem" className="btn btn-info text-white" onClick={this.onAdd}>Add Item</button>
                    </div>
                    </div>
                    <div className="col-md-12 mt-3">
                        <Table items = {this.state.items} />
                    </div>
                </div>
            </div>
            )
        }
}

export default App;
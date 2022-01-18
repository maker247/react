import react from "react";
import Items from "./Items";

class App extends react.Component {
    state = {
        items: [
            {id: 1, name: 'Apple', price: '500$'},
            {id: 2, name: 'Orange', price: '300$'},
            {id: 3, name: 'PineApple', price: '800$'}
        ]
    }
    
    onAdd = () => {
        let id = this.state.items.length + 1;
        this.setState({
            items: [...this.state.items, {id, name: `Item ${id}`, price: 100 * id}]
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row m-auto">
                    <div className="col-md-12">
                        <h1>Hello, React!</h1>
                        <Items items={this.state.items} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
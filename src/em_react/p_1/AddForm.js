import React from "react";

class AddForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();

    add = () => {
        let name = this.nameRef.current.value;
        let price = this.priceRef.current.value;
        this.props.add(name, price);
    }
    render() {
        return (
            <>
                <input type="text" ref={this.nameRef} /><br />
                <input type="text" ref={this.priceRef} /><br />
                <button onClick={this.add}>Add</button>
            </>
        )
    }
}

export default AddForm
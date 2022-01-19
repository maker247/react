import React from "react";

class Item extends React.Component {
    render() {
        return(
            <li>{this.props.name} -- {this.props.price}$</li>
        )
    }
}

export default Item
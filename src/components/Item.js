import React, { Component } from 'react';

class Item extends Component {
    render() {
        let price = this.props.shouldDiscount
            ? this.props.price * (1 - this.props.discount)
            : this.props.price;

        return (
            <div className="item">
                <h4>{this.props.item}: ${price}</h4>
            </div>
        )
    }
}

export default Item;
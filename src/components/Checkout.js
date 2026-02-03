import React, { Component } from 'react';
import Item from './Item';

class Checkout extends Component {
    render() {
        return (
            <div className="checkout">
                <div>Checkout</div>
                <Item />
            </div>
        )
    }
}
export default Checkout;
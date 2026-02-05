import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h3>Store Inventory</h3>
                {this.props.store.map((item, index) => {
                    return (
                        <Item
                            key={index}
                            item={item.item}
                            price={item.price}
                            discount={item.discount}
                            shouldDiscount={this.props.shouldDiscount}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Home;
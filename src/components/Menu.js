import React, { Component } from 'react';
import Item from './Item';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div>Menu</div>
                <Item />
            </div>
        )
    }
}
export default Menu;
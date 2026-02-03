import React, { Component } from 'react';
import Spam from './Spam';

class Spamalot extends Component {
    render() {
        let boxes = [];
        for (let i = 0; i < 500; i++) {
            boxes.push(<Spam key={i} />);
        }

        return (
            <div style={{ display: 'contents' }}>
                {boxes}
            </div>
        )
    }
}
export default Spamalot;
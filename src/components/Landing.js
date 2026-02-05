import React, { Component } from 'react';

class Landing extends Component {
    render() {
        let hottestItem = this.props.store.find(i => i.hottest === true);

        return (
            <div className="landing">
                <h1>Welcome, {this.props.user}</h1>

                {hottestItem
                    ? <div>The hottest item is: {hottestItem.item} for ${hottestItem.price}</div>
                    : null
                }
            </div>
        )
    }
}

export default Landing;
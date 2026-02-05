import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div>
                {this.state.show ? "Now you see me" : "Now you don't"}
                <button onClick={() => this.setState({ show: !this.state.show })}>
                    Change
                </button>
            </div>
        )
    }
}

export default Hudini;
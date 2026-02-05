import React, { Component } from 'react';
import './App.css';
import Hudini from './components/Hudini';
import Landing from './components/Landing';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "Robyn",
      store: [
        { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
        { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
        { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
      ],
      shouldDiscount: false,
      currentPage: "Landing"
    }
  }

  changePage = (pageName) => {
    this.setState({ currentPage: pageName });
  }

  render() {
    return (
      <div className="App">
        <Hudini />

        <hr />
        <button onClick={() => this.changePage("Landing")}>Landing Page</button>
        <button onClick={() => this.changePage("Home")}>Home Page</button>
        {this.state.currentPage === "Landing"
          ? <Landing user={this.state.user} store={this.state.store} />
          : <Home store={this.state.store} shouldDiscount={this.state.shouldDiscount} />
        }
      </div>
    );
  }
}

export default App;
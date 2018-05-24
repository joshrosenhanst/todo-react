import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Board from './Board';

class App extends Component {
  render() {
    const knightPosition = this.props.knightPosition;
    return (
      <div className="App">
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <div className="header-icon icon is-large"><i className="fas fa-chess-rook fa-3x"></i></div>
              <h1 className="title">Chess Drag Tutorial App</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Board knightPosition={knightPosition} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;

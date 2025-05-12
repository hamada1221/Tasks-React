import React, { Component } from 'react';
import './ClassStyle.css';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
       <div className="counter-container">
      <h1>Class Counter</h1>
      <div className="counter-display">{this.state.count}</div>
      <div className="counter-buttons">
        
        <button onClick={this.decrement}>Decrease (-)</button>
        <button onClick={this.increment}>increase (+)</button>
        
      </div>
    </div>
    );
  }
}

export default ClassCounter;
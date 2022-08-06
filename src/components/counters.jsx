import React, { Component } from "react";
import Counter1 from "./counter1";

class Counters extends Component {
  render() {  
      
    const {counters, onIncrement , onDelete, onReset , onDecrement } = this.props

    return (
      <React.Fragment>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <div>
          {counters.map((counters) => (
            <Counter1
              key={counters.id}
              onIncrement={onIncrement}
              onDelete={onDelete} 
              onDecrement = {onDecrement}
              counters={counters}
            />
          ))}
      
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;

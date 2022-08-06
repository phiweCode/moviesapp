import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters"; 
import Navbar from "./components/navBar";

class App extends Component {

  state = {
    counters: [

      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      
    ],
  };

  handleDelete = (countersId) => {
    console.log("Handle delete has been clicked", countersId);
    let counters = this.state.counters.filter((c) => c.id !== countersId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = (increment) => {
    console.log(increment);

    const counters = [...this.state.counters];
    let index = counters.indexOf(increment);
    counters[index] = { ...increment };
    counters[index].value++;
    this.setState({ counters });
  }; 

  handleDecrement = (decrement) => 
  { 
    const counters = this.state.counters; 
    let index = counters.indexOf(decrement); 
    counters[index] = {...decrement}; 
    counters[index].value--; 
    this.setState({counters})

  }

  render() {
    return (
      <React.Fragment>
        
        <Navbar totalNumberOfCounters={this.state.counters.filter(c=>c.value>0).length}/>
    
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement} 
            onDecrement = {this.handleDecrement}
            counters={this.state.counters}
          />
        </main>

      </React.Fragment>
    );
  }
}

export default App;

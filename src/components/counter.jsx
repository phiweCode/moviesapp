import React, { Component } from "react";
import { getMovies } from "../moviesApi/fakeMoviesAPI";

class Counter extends Component {
  state = {
    tags: getMovies(),
  }; 


  style = {
    display: "grid",
    gridTemplateColumns: "2fr repeat(4,1fr)",
    listStyle: "none",
    fontWeight: 700,
    color: "#000",
  };

  buttonStyles = {
    border: "3px solid #333",
    color: "#fff",
    backgroundColor: "red", 
    padding: "10px 20px", 
    borderRadius: '7px' ,
    pointer: 'cursor'
  }; 

  delete =(movie)=> 
  {
     const movies = this.state.tags.filter( m => m.id !== movie.id)
     this.setState({tags: movies})
    

  }
  

  render() {
    return (
      <React.Fragment> 

      {console.log(this.state.tags.length)}

        <h3 style={{ textAlign: "center", padding: "2em 1em" }}> { this.state.tags.length !== 0 ? 
          `showing ${this.state.tags.length} movies from the database` : "There are no movies in the database"
        }
        </h3>
        <hr />
        <br />

        <ul className="table-column-labels-Container" style={this.style}>

          <li className="table-Column-Labels">Title</li>
          <li className="table-Column-Labels">Genre</li>
          <li className="table-Column-Labels" style={{ textAlign: "center" }}>
            Stock
          </li>
          <li className="table-Column-Labels" style={{ textAlign: "center" }}>
            Rate
          </li>

        </ul>

        <hr />

        {this.state.tags.map((data) => {
          return (
            <React.Fragment>
              <ul className="tableData" style={this.style} key={data.id}>
                <li style={{ fontWeight: 500 }} >
                  {data.title}
                </li>
                <li style={{ fontWeight: 500 }} key={data.genre.id}>
                  {data.genre.name}
                </li>
                <li
                  style={{ fontWeight: 500, textAlign: "center" }}
                  
                >
                  {data.numberInStock}
                </li>
                <li
                  style={{ fontWeight: 500, textAlign: "center" }}
                  
                >
                  {data.dailyRentalRate}
                </li>
                <li >
                  <button style={this.buttonStyles} onClick={()=>this.delete(data)}>Delete</button>
                </li>
              </ul>
              <hr />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Counter;

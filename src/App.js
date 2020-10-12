import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    area: "",
    result: ""
  }

  handleChange = (e) => {
    this.setState({area: e.target.value})
  }

  handleSubmit = (e) => {
   e.preventDefault()
   let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    }
    fetch(`http://localhost:3000/`, configObj)
      .then(resp => resp.json())
      .then((data) => {
        this.setState({result: data.average_price})      
      })
      .catch(err => {
        alert(err.message)
      })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>HOUSE SPIDER</h3>
        
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.area} />
          <input type="submit" value="get data" />
        </form>

        <div>{this.state.result}</div>
      </header>
    </div>
  );
  }
}

export default App;

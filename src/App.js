import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Component/nav'
import Slider from './Component/slider'

class App extends Component {

constructor()
{
  super()
  this.state={

  }

}


  render() {
    return (
      <div className="App">
      <Nav/>
      <Slider/>
       
      </div>
    );
  }
}


export default App;

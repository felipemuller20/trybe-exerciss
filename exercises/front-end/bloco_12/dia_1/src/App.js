import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Button from './Button';

class App extends React.Component {
  
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      pokeIndex: 0
    }
  }

  handleClick(event) {
    const { name, value } = event.target
    if (value < (pokemons.length - 1)) {
      this.setState((previous, _props) => ({pokeIndex: previous.pokeIndex + 1}))
    } else {
      this.setState({[name]: 0})
    }
    console.log(pokemons[value])
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} value={this.state.pokeIndex} />
        <Button
          handleClick={this.handleClick}
          name='pokeIndex'
          value={this.state.pokeIndex}
        />
        {/* <button 
          onClick={this.handleClick}
          name='pokeIndex'
          value={this.state.pokeIndex}>Next
        </button> */}
      </div>
    ); 
  }
}

export default App;
import React from 'react'
import pokemons from '../data'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    const pokedex = pokemons.map((pokemon, index) => (
      <Pokemon pokemon={pokemon} />
    ))
    return (
      <div>
        { pokedex }
      </div>
    )
  }
}

export default Pokedex
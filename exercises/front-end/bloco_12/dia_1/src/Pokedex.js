import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    
    render() {

        const { value } = this.props

        return (
            <div className="pokedex">
                {<Pokemon pokemon={this.props.pokemons[value]} />}
            </div>
        );
    }
}

export default Pokedex;
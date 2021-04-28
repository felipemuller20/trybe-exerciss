import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div>
        <h1>{name}</h1>
        <h2>Type: {type}</h2>
        <h3>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</h3>
        <img src={image} alt="Imagem do pokemon"/>
      </div>
    )
  }
}

export default Pokemon;
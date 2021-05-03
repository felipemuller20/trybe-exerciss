import React from 'react'

class Residence extends React.Component {
  render() {
    const { text, name, handleChange } = this.props
    return(
      <div>
        <label>
          {text}<br/>
          <input
            type='radio'
            value='house'
            name={name}
            onChange={handleChange}
            id='house'
          /> Casa
          <input 
            type='radio'
            value='apartment'
            name={name}
            onChange={handleChange}
            id='apartment'
          /> Apartamento
        </label>
      </div>
    );
  }
}

export default Residence;
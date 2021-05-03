import React from 'react'

class PersonalData extends React.Component {
  render() {
    const { text, name, value, handleChange, error, type='text' } = this.props

    return (
      <div>
        {text}<br/>
        <input 
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
          required
        />
        <br/>
        <span>{error}</span>
        <br/>
      </div>
    );
  }
}

export default PersonalData;

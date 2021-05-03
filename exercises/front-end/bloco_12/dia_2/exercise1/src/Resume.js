import React from 'react';

class Resume extends React.Component {
  render() {
    const { name, value, handleChange, length, text } = this.props
    return (
      <div>
        <label>
          {text}<br/>
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            maxLength={length}
            required
          />
        </label>
        <br/>
      </div>
    );
  }
}

export default Resume;
import React from 'react'

class Button extends React.Component {
  render() {
    const { handleClick, value, name } = this.props
    return (
      <button
        onClick={handleClick}
        value={value}
        name={name}
      >
        Next
      </button>
    );
  }
}

export default Button;

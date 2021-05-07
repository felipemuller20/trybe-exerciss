import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>
          Insira um novo doguinho!
        </button>
      </div>
    );
  }
}

export default Button;
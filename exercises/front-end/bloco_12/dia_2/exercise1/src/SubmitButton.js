import React from 'react'

class SubmitButton extends React.Component {
  render() {
    const { handleSendClick, infos } = this.props
    console.log(infos)
    return (
      <div>
        <button
        onClick={handleSendClick}
        >
        Enviar!
        </button>
        
      </div>
    );
  }
}

export default SubmitButton
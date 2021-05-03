import React from 'react';
import states from './statesArray';

class States extends React.Component {
  render() {
    const { text, value, handleChange, name } = this.props

    const array = [];
    let siglas = states.map((state) => Object.keys(state));
    siglas.forEach((sigla) => array.push(sigla[0]))

    return (
      <div>
        <label>
          {text}<br/>
          <select
            name={name}
            value={value}
            onChange={handleChange}
          >
            {/* <option value="rs">RS</option>
            <option value='sc'>SC</option>
            <option value='pr'>PR</option> */}
            {array.map((state) => (<option key={state} value={state}>{state}</option>))}
          </select>  
          <br/><br/>    
        </label>
      </div>
    );
  }
}

export default States
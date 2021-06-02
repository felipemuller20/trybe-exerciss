import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>CADASTRO DE CLIENTES</h1>
        <h2>TomTicket v2.0</h2>
        <Link to="/login">Faça o login!</Link>
      </div>
    );
  }
}

export default Home;

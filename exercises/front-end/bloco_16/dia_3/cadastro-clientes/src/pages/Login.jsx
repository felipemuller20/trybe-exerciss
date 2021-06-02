import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions'
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    const { validateLogin } = this.props;
    return (
      <div>
        <h1>TELA DE LOGIN</h1>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <Link 
          to="/clients-list"
          onClick={() => validateLogin(true)}
        >
          Entrar
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  validateLogin: (loged) => dispatch(userLogin(loged))
})

export default connect(null, mapDispatchToProps)(Login);

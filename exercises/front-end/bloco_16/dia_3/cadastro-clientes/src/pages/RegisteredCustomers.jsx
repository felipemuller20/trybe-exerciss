import React from 'react';
import ClientsList from '../components/ClientsList';
import NotLogged from '../components/NotLogged';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class RegisteredCustomers extends React.Component {
  render() {
    const { loged } = this.props;
    return (
      <div>
        <h1>CLIENTES CADASTRADOS</h1>
        {!loged ? <NotLogged /> : <ClientsList />}
        <Link to="/">Home</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loged: state.registerReducer.logedIn,
})

export default connect(mapStateToProps)(RegisteredCustomers);

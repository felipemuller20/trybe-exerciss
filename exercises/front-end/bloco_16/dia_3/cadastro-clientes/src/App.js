import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NewCustomers from './pages/NewCustomers';
import RegisteredCustomers from './pages/RegisteredCustomers';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/clients-list" component={ RegisteredCustomers } />
            <Route path="/register-new" component={ NewCustomers } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

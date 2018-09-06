import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';
import Home from '../views/Home';
import Login from '../views/Login';
import LoginPage from '../components/SignupPage';
import Signup from '../views/Signup';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;

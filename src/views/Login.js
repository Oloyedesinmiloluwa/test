import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginModal from '../components/forms/LoginFormModal';
import RegisterModal from '../components/forms/RegisterFormModal';
import userSignupAction from '../redux/actions/signupAction';


/**
 * Represents the Login Component.
 * @extends Component
 * */
class Login extends Component {
  /**
    * When the state changes, does it affect the rendered appearance?
    * @param {Object} details user login details.
    * @returns {Object} returns the user details
    */
  loginSubmit = details => details;

  /**
    * When the state changes, does it affect the rendered appearance?
    * @param {Object} details user register details.
    * @returns {Object} returns the user details
    */
  registerSubmit = details => details;

  /**
 * Renders the Component.
 * @returns {Object} returns the jsx
 * */
  render() {
    const { userSignup, history } = this.props;
    return (
      <div>
        <h1>FARGO REACT APP - TEST LOGIN VIEW</h1>
        <LoginModal handleSubmit={this.loginSubmit} />
        <RegisterModal submit={this.registerSubmit} history={history} userSignup={userSignup} />
      </div>
    );
  }
}

export default connect(null, { userSignup: userSignupAction })(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginCard from './LoginCard';
import RegisterModal from './RegisterModal';
import userSignupAction from '../redux/actions/signupAction';
import socialAuthAction from '../redux/actions/socialAuth';

// const LoginPage = ({ history, userSignup }) => (
//   <div>
//     <LoginCard />
//     <RegisterModal history={history} userSignup={userSignup} />
//   </div>
// );
class LoginPage extends Component {
  state = {
    open: false,
  }

  show = () => () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { userSignup, history, AuthAction } = this.props;
    return (
      <div>
        <LoginCard show={this.show} AuthAction={AuthAction} history={history} />
        <RegisterModal history={history} userSignup={userSignup} open={this.state.open} close={this.close} />
      </div>
    );
  }
}
export default connect(null, { userSignup: userSignupAction, AuthAction: socialAuthAction })(LoginPage);

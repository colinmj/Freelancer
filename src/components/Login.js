import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startFacebookLogin } from '../redux/modules/auth';

const Login = ({ startLogin, startFacebook }) => {
  return (
    <div className="login-layout">
      <div className="login-layout_text">
        <h1>Welcome to Freelancer!</h1>
        <p>
          This is an app where you can simply keep track of your income and
          expenses without all the bells and whistles that come with some other
          software! Clean and simple.
        </p>
      </div>

      <div className="login-layout_buttons">
        <button onClick={startLogin}>
          Login with <i class="fa fa-google" aria-hidden="true" />{' '}
        </button>
        <button onClick={startFacebook}>
          Login with <i class="fa fa-facebook-official" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  startFacebook: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);

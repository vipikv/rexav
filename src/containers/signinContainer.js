import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/signinActions';
import Signin from '../components/signin';

const SigninContainer = (props) => {
  const handleSignin = (email, password) => {
    props.signin(email, password);
  };

  return (
    <div>
      <Signin onSignin={handleSignin} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (email, password) => dispatch(signin(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(SigninContainer);

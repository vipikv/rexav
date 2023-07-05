
import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/signupActions';
import Signup from '../components/signup';

const SignupContainer = (props) => {
  const handleSignup = (formData) => {
    props.signup(formData);
  };

  return (
    <div>
      <Signup onSignup={handleSignup} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (formData) => dispatch(signup(formData)),
  };
};

export default connect(null, mapDispatchToProps)(SignupContainer);


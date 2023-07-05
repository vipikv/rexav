import React from 'react'


const initialState = {
    signupuser: null
};
  
const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          signupuser: action.payload.userCredential.user,
          message: action.payload.message
        };
      default:
        return state;
    }
  };
  
  export default signupReducer;
  
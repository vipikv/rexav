const initialState = {
    signinuser: null,
    error: null,
  };
  
  const signinReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNIN_SUCCESS':
        return {
          ...state,
          signinuser: action.payload.user,
          error: null,
        };
      case 'SIGNIN_FAILURE':
        return {
          ...state,
          signinuser: null,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default signinReducer;
  
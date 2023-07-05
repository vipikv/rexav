
import { combineReducers } from 'redux';

import signupReducer from './reducers/signupReducer';
import signinReducer from './reducers/signinReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  signin:signinReducer
});

export default rootReducer;

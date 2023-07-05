import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { app } from "../db";
// import { useHistory } from 'react-router-dom';

export const signin = async (formData,redirectCallback) => {
    return async (dispatch) => {
        try {
        // const history = useHistory();
          const auth = getAuth();
          const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
          const user = userCredential.user;
          dispatch({
            type: 'SIGNIN_SUCCESS',
            payload: {
              user,
            },
          });
        //   history.push('/dashboard');
        redirectCallback();
        } catch (error) {
          dispatch({
            type: 'SIGNIN_FAILURE',
            payload: {
              error: error.message,
            },
          });
        }
      };
  };
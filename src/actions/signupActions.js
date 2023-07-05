import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { app } from "../db";
// import { useHistory } from 'react-router-dom';

export const signup = async (formData,redirectCallback) => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      var promises = [];
      promises.push(updateProfile(userCredential.user, { displayName: formData.name }));
      // promises.push(sendEmailVerification(userCredential.user));

      await Promise.all(promises);

      const action = {
        type: 'SIGNUP_SUCCESS',
        payload: {
          userCredential: userCredential,
          message: 'Signup successful!',
        },
      };
      dispatch(action);
      redirectCallback();
      // useHistory().push('/signin');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };
  };
  
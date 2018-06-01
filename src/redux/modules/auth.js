import {
  firebase,
  googleAuthProvider,
  facebookProvider
} from '../../firebase/firebase';

export const startLogin = () => {
  return dispatch => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startFacebookLogin = () => {
  return dispatch => {
    return firebase.auth().signInWithPopup(facebookProvider);
  };
};

export const startLogout = () => {
  return dispatch => {
    return firebase.auth().signOut();
  };
};

export const login = uid => ({
  type: 'LOGIN',
  uid
});

export const logout = () => ({
  type: 'LOGOUT'
});

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

import db from '../../firebase/firebase';

const ADD_CATEGORIES = 'ADD_CATEGORIES';
const SET_CATEGORIES = 'SET_CATEGORIES';

export const addCategories = categories => ({
  type: ADD_CATEGORIES,
  categories
});

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories
});

export const asyncAddCategories = (categories = []) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/categories`)
      .push(categories)
      .then(ref => {
        dispatch(
          addCategories({
            id: ref.key,
            ...categories
          })
        );
      });
  };
};

export const asyncSetCategories = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/categories`)
      .once('value')
      .then(snapshot => {
        let categories = [];
        snappy.forEach(snap => {
          categories.push({
            id: snap.key,
            ...snap.val()
          });
        });
        dispatch(setCategories(categories));
      });
  };
};

export default (
  state = {
    categories: {}
  },
  action
) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return [...state, action.categories];
    case SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

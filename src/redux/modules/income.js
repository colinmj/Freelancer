import db from '../../firebase/firebase';

const ADD_INCOME = 'ADD_INCOME';
const SET_INCOME = 'SET_INCOME';

export const addIncome = income => ({
  type: ADD_INCOME,
  income
});

export const setIncome = income => ({
  type: SET_INCOME,
  income
});

export const asyncAddIncome = (income = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return db
      .ref(`users/${uid}/income`)
      .push(income)
      .then(ref => {
        dispatch(
          addIncome({
            id: ref.key,
            ...income
          })
        );
      });
  };
};

export const asyncSetIncome = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/income`)
      .once('value')
      .then(snappy => {
        let income = [];
        snappy.forEach(lilSnap => {
          income.push({
            id: lilSnap.key,
            ...lilSnap.val()
          });
        });
        dispatch(setIncome(income));
      });
  };
};

export default (
  state = {
    income: {}
  },
  action
) => {
  switch (action.type) {
    case ADD_INCOME:
      return [...state, action.income];
    case SET_INCOME:
      return action.income;
    default:
      return state;
  }
};

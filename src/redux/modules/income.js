import db from '../../firebase/firebase';

const ADD_INCOME = 'ADD_INCOME';

export const addIncome = income => ({
  type: ADD_INCOME,
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

export default (
  state = {
    income: {}
  },
  action
) => {
  switch (action.type) {
    case ADD_INCOME:
      return [...state, action.income];
    default:
      return state;
  }
};

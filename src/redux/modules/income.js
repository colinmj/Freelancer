import db from '../../firebase/firebase';

const ADD_INCOME = 'ADD_INCOME';
const SET_INCOME = 'SET_INCOME';
const FILTER_INCOME = 'FILTER_INCOME';
const EDIT_INCOME = 'EDIT_INCOME';
const REMOVE_INCOME = 'REMOVE_INCOME';

export const addIncome = income => ({
  type: ADD_INCOME,
  income
});

export const setIncome = income => ({
  type: SET_INCOME,
  income
});

export const filterIncome = (income = []) => ({
  type: FILTER_INCOME,
  income
});

export const editIncome = (id, updates) => ({
  type: EDIT_INCOME,
  id,
  updates
});

export const removeIncome = ({ id }) => ({
  type: REMOVE_INCOME,
  id
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

export const asyncEditIncome = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/income/${id}`)
      .update(updates)
      .then(dispatch(editIncome(id, updates)));
  };
};

export const asyncRemoveIncome = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/income/${id}`)
      .remove()
      .then(dispatch(removeIncome({ id })));
  };
};

export default (
  state = {
    income: {},
    selectedCategories: []
  },
  action
) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        income: action.income
      };
    case SET_INCOME:
      return {
        ...state,
        income: action.income
      };
    case FILTER_INCOME:
      return {
        ...state,
        selectedCategories: action.income
      };
    case EDIT_INCOME:
      return {
        ...state,
        income: action.updates
      };
    case REMOVE_INCOME:
      return {
        ...state,
        income: state.income.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};

import db from '../../firebase/firebase';

const ADD_EXPENSE = 'ADD_EXPENSE';
const SET_EXPENSES = 'SET_EXPENSES';
const FILTER_EXPENSESS = 'FILTER_EXPENSES';
const EDIT_EXPENSES = 'EDIT_EXPENSES';

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense
});

export const setExpenses = expense => ({
  type: SET_EXPENSES,
  expense
});

export const filterExpenses = (expense = []) => ({
  type: FILTER_EXPENSESS,
  expense
});

export const editExpenses = (id, updates) => ({
  type: EDIT_EXPENSES,
  id,
  updates
});

export const asyncAddExpense = expenseData => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // const {
    //   title = '',
    //   amount = 0,
    //   created = 0,
    //   description = '',
    //   categories = ''
    // } = expenseData;
    // const expense = { title, amount, created, description, categories };

    return db
      .ref(`users/${uid}/expenses`)
      .push(expenseData)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expenseData
          })
        );
      });
  };
};

export const asyncSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then(snappy => {
        let expenses = [];
        snappy.forEach(lilSnap => {
          expenses.push({
            id: lilSnap.key,
            ...lilSnap.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

export const asyncEditExpenses = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(dispatch(editExpenses(id, updates)));
  };
};

export default (
  state = {
    expense: {},
    selectedCategories: []
  },
  action
) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expense: action.expense
      };
    case SET_EXPENSES:
      return {
        ...state,
        expense: action.expense
      };
    case FILTER_EXPENSESS:
      return {
        ...state,
        selectedCategories: action.expense
      };
    case EDIT_EXPENSES:
      return {
        ...state,
        expense: action.updates
      };
    default:
      return state;
  }
};

import db from '../../firebase/firebase';

const ADD_EXPENSE = 'ADD_EXPENSE';
const SET_EXPENSES = 'SET_EXPENSES';

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense
});

export const setExpenses = expenses => ({
  type: SET_EXPENSES,
  expenses
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

export default (
  state = {
    expense: {}
  },
  action
) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case SET_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};

const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense
});

export default (
  state = {
    expense: {}
  },
  action
) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expense: action.expense
      };
    default:
      return state;
  }
};

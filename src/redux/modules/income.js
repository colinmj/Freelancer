const ADD_INCOME = 'ADD_INCOME';

export const addIncome = income => ({
  type: ADD_INCOME,
  income
});

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

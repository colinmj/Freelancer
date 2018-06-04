import { combineReducers } from 'redux';

import authReducer from './modules/auth';
import incomeReducer from './modules/income';
import expensesReducer from './modules/expense';
import categoriesReducer from './modules/categories';

export default combineReducers({
  auth: authReducer,
  income: incomeReducer,
  expense: expensesReducer,
  categories: categoriesReducer
});

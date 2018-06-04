import { combineReducers } from 'redux';

import authReducer from './modules/auth';
import incomeReducer from './modules/income';
import expensesReducer from './modules/expense';

export default combineReducers({
  auth: authReducer,
  income: incomeReducer,
  expense: expensesReducer
});

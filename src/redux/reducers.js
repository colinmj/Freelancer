import { combineReducers } from 'redux';

import authReducer from './modules/auth';
import incomeReducer from './modules/income';

export default combineReducers({
  auth: authReducer,
  income: incomeReducer
});

import moment from 'moment';

const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';
const SORT_BY_DATE = 'SORT_BY_DATE';
const SET_START_DATE = 'SET_START_DATE';
const SET_END_DATE = 'SET_END_DATE';

export const setTextFilter = text => ({
  type: SET_TEXT_FILTER,
  text
});

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

export const sortByDate = () => ({
  type: SORT_BY_DATE
});

export const setStartDate = (date = undefined) => ({
  type: SET_START_DATE,
  date
});

export const setEndDate = date => ({
  type: SET_END_DATE,
  date
});

export default (
  state = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  },
  action
) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.date
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

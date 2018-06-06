import React from 'react';
import { connect } from 'react-redux';

import Expenses from './Expenses';
import {
  setSelectedCategories,
  setRenderedCategories
} from '../../redux/modules/categories';
import { asyncSetExpenses } from '../../redux/modules/expense';
import { objectToArray } from '../../helpers/category';

class ExpensesContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(asyncSetExpenses(this.props.expenses));
    const cats = this.props.categories
      ? objectToArray(this.props.categories)
      : null;
    this.props.dispatch(setRenderedCategories(cats));
  }
  render() {
    return <Expenses />;
  }
}

const mapStateToProps = state => ({
  expenses: state.expense,
  categories: state.categories.categories,
  renderedCategories: state.categories.renderedCategories
});

export default connect(mapStateToProps)(ExpensesContainer);

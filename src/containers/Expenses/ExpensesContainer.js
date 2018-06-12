import React from 'react';
import { connect } from 'react-redux';

import Expenses from './Expenses';
import {
  setSelectedCategories,
  setRenderedCategories
} from '../../redux/modules/categories';
import { asyncSetExpenses } from '../../redux/modules/expense';
import { objectToArray } from '../../helpers/category';
import filterItems from '../../helpers/filter';

class ExpensesContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(asyncSetExpenses(this.props.expenses));
    const cats = this.props.categories
      ? objectToArray(this.props.categories)
      : null;
    this.props.dispatch(setRenderedCategories(cats));
  }
  render() {
    const { expenses, renderedCategories, selectedCategories } = this.props;

    let filtered =
      expenses.length &&
      expenses.filter(item =>
        item.categories.find(i => selectedCategories.includes(i))
      );

    return (
      <Expenses
        expenses={selectedCategories.length === 0 ? expenses : filtered}
        categories={renderedCategories}
      />
    );
  }
}

const mapStateToProps = state => ({
  expenses:
    state.expense.expense.length > 0 &&
    filterItems(state.expense.expense, state.filters),
  categories: state.categories.categories,
  renderedCategories: state.categories.renderedCategories,
  selectedCategories: state.expense.selectedCategories
});

export default connect(mapStateToProps)(ExpensesContainer);

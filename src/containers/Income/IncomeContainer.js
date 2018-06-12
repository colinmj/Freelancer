import React from 'react';
import { connect } from 'react-redux';

import { asyncSetIncome, filterIncome } from '../../redux/modules/income';
import {
  setSelectedCategories,
  setRenderedCategories
} from '../../redux/modules/categories';
import Income from './Income';
import { objectToArray } from '../../helpers/category';
import filterItems from '../../helpers/filter';

class IncomeContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(asyncSetIncome(this.props.income));
    const cats = this.props.categories
      ? objectToArray(this.props.categories)
      : null;
    this.props.dispatch(setRenderedCategories(cats));
  }

  render() {
    const { renderedCategories, selectedCategories, income } = this.props;

    let filtered =
      income.length &&
      income.filter(item =>
        item.categories.find(i => selectedCategories.includes(i))
      );

    return (
      <Income
        categories={renderedCategories}
        selected={selectedCategories}
        income={selectedCategories.length === 0 ? income : filtered}
      />
    );
  }
}

const mapStateToProps = state => ({
  income:
    state.income.income.length > 0 &&
    filterItems(state.income.income, state.filters),
  categories: state.categories.categories,
  renderedCategories: state.categories.renderedCategories,
  selectedCategories: state.income.selectedCategories
});

export default connect(mapStateToProps)(IncomeContainer);

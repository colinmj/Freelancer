import React from 'react';
import { connect } from 'react-redux';

import { asyncSetIncome } from '../../redux/modules/income'; //filter income was here
import {
  setSelectedCategories,
  setRenderedCategories
} from '../../redux/modules/categories';
import Income from './Income';
import { objectToArray, filterCategories } from '../../helpers/category';
import filterItems from '../../helpers/filter';

class IncomeContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(asyncSetIncome(this.props.income));

    if (
      this.props.renderedCategories.length === 0 &&
      this.props.categories.length
    ) {
      const categories = this.props.categories
        ? objectToArray(this.props.categories)
        : null;

      this.props.dispatch(setRenderedCategories(categories));
    }
  }

  render() {
    const {
      renderedCategories,
      selectedCategories,
      income,
      categories
    } = this.props;

    let filtered =
      income.length &&
      selectedCategories.length &&
      filterCategories(income, selectedCategories);

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

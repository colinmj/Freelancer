import React from 'react';
import { connect } from 'react-redux';

import { asyncSetIncome, filterIncome } from '../../redux/modules/income';
import {
  setSelectedCategories,
  setRenderedCategories
} from '../../redux/modules/categories';
import Income from './Income';
import { objectToArray } from '../../helpers/category';
import { Slide } from '@material-ui/core';
import { filteredIncome } from '../../helpers/filter';

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

    return (
      <Income
        // select={this.onCategoriesSelect}
        categories={renderedCategories}
        selected={selectedCategories}
        // filter={this.onCategoriesSelect}
        income={income}
        // dispatchSelect={this.onDispatchSelect}
      />
    );
  }
}

const mapStateToProps = state => ({
  income: state.income.income,
  categories: state.categories.categories,
  renderedCategories: state.categories.renderedCategories,
  selectedCategories: state.income.selectedCategories
});

export default connect(mapStateToProps)(IncomeContainer);

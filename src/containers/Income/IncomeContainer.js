import React from 'react';
import { connect } from 'react-redux';

import { asyncSetIncome } from '../../redux/modules/income';
import {
  setSelectedCategories,
  setRenderedCategories
} from '../../redux/modules/categories';
import Income from './Income';
import { objectToArray } from '../../helpers/category';

class IncomeContainer extends React.Component {
  componentDidMount() {
    console.log('yo');
    this.props.dispatch(asyncSetIncome(this.props.income));
    const cats = this.props.categories
      ? objectToArray(this.props.categories)
      : null;
    this.props.dispatch(setRenderedCategories(cats));
  }

  onCategoriesSelect = selectedOption => {
    this.props.dispatch(setSelectedCategories(selectedOption));
  };

  render() {
    const { renderedCategories } = this.props;

    return (
      <Income
        select={this.onCategoriesSelect}
        categories={renderedCategories}
      />
    );
  }
}

const mapStateToProps = state => ({
  income: state.income,
  categories: state.categories.categories,
  renderedCategories: state.categories.renderedCategories
});

export default connect(mapStateToProps)(IncomeContainer);

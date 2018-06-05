import React from 'react';
import Income from './Income';

import { connect } from 'react-redux';

import { asyncSetIncome } from '../../redux/modules/income';
import {
  setSelectedCategories,
  setRenderedCategories
} from '../../redux/modules/categories';

class IncomeContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(asyncSetIncome(this.props.income));
    const cats = this.objectToArray(this.props.categories);
    this.props.dispatch(setRenderedCategories(cats));
  }

  objectToArray = arr => {
    let newArr = [];
    arr.map(array => {
      newArr.push(Object.values(array));
    });
    const merged = [].concat.apply([], newArr);
    return merged;
  };

  onCategoriesSelect = selectedOption => {
    this.props.dispatch(setSelectedCategories(selectedOption));
  };

  render() {
    const { renderedCategories } = this.props;
    // const categories = this.objectToArray(this.props.categories);
    // console.log(categories);
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
  categories: state.categories,
  renderedCategories: state.categories.renderedCategories
});

export default connect(mapStateToProps)(IncomeContainer);

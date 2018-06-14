import React from 'react';
import { connect } from 'react-redux';

import AddIncome from './AddIncome';
import { asyncAddIncome } from '../../redux/modules/income';
import { setRenderedCategories } from '../../redux/modules/categories';

class AddIncomeContainer extends React.Component {
  incomeSubmit = income => {
    this.props.dispatch(asyncAddIncome(income));
    this.props.history.push('/income');
  };
  render() {
    return <AddIncome incomeSubmit={this.incomeSubmit} />;
  }
}

const mapStateToProps = state => ({
  income: state.income,
  categories: state.categories.categories,
  rendered: state.categories.renderedCategories
});

export default connect(mapStateToProps)(AddIncomeContainer);

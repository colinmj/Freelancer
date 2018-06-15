import React from 'react';
import { connect } from 'react-redux';

import AddIncome from './AddIncome';
import { asyncAddIncome } from '../../redux/modules/income';
import { setRenderedCategories } from '../../redux/modules/categories';

class AddIncomeContainer extends React.Component {
  incomeSubmit = income => {
    this.props.asyncAddIncome(income);
    this.props.history.push('/income');
  };
  render() {
    return <AddIncome incomeSubmit={this.incomeSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  asyncAddIncome: income => dispatch(asyncAddIncome(income))
});

export default connect(undefined, mapDispatchToProps)(AddIncomeContainer);

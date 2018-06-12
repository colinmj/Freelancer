import React from 'react';
import { connect } from 'react-redux';

import AddIncome from './AddIncome';
import { asyncAddIncome } from '../../redux/modules/income';

class AddIncomeContainer extends React.Component {
  incomeSubmit = income => {
    console.log(income);
    this.props.dispatch(asyncAddIncome(income));
    this.props.history.push('/income');
  };
  render() {
    return <AddIncome incomeSubmit={this.incomeSubmit} />;
  }
}

const mapStateToProps = state => ({
  income: state.income
});

export default connect(mapStateToProps)(AddIncomeContainer);

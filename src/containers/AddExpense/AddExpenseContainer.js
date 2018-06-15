import React from 'react';
import { connect } from 'react-redux';

import AddExpense from './AddExpense';
import { asyncAddExpense } from '../../redux/modules/expense';

class AddExpenseContainer extends React.Component {
  expenseSubmit = expense => {
    this.props.asyncAddExpense(expense);
    this.props.history.push('/expenses');
  };

  render() {
    return <AddExpense expenseSubmit={this.expenseSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  asyncAddExpense: expense => dispatch(asyncAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpenseContainer);

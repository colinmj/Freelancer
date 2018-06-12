import React from 'react';
import { connect } from 'react-redux';

import AddExpense from './AddExpense';
import { asyncAddExpense } from '../../redux/modules/expense';

class AddExpenseContainer extends React.Component {
  expenseSubmit = expense => {
    console.log(expense);
    this.props.dispatch(asyncAddExpense(expense));
    this.props.history.push('/expenses');
  };

  render() {
    return <AddExpense expenseSubmit={this.expenseSubmit} />;
  }
}

const mapStateToProps = state => ({
  expense: state.expense
});

export default connect(mapStateToProps)(AddExpenseContainer);

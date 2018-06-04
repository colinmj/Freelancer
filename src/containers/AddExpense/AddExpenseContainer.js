import React from 'react';
import { connect } from 'react-redux';

import AddExpense from './AddExpense';
import { addExpense } from '../../redux/modules/expense';

class AddExpenseContainer extends React.Component {
  expenseSubmit = expense => {
    this.props.dispatch(addExpense(expense));
  };
  render() {
    return <AddExpense expenseSubmit={this.expenseSubmit} />;
  }
}

const mapStateToProps = state => ({
  expense: state.expense
});

export default connect(mapStateToProps)(AddExpenseContainer);

import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import {
  asyncSetExpenses,
  asyncEditExpenses,
  asyncRemoveExpense
} from '../redux/modules/expense';

class EditExpense extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.income);
    this.props.dispatch(asyncSetExpenses(this.props.expense));
  }

  expensesSubmit = expense => {
    console.log(expense);
    this.props.dispatch(asyncEditExpenses(this.props.expense.id, expense));
  };
  expenseRemove = () => {
    this.props.dispatch(asyncRemoveExpense({ id: this.props.expense.id }));
  };
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          expenseSubmit={this.expensesSubmit}
        />
        <button onClick={this.expenseRemove}>Remove this Expense</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense:
    state.expense.expense.length &&
    state.expense.expense.find(item => item.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpense);

import React from 'react';
import { connect } from 'react-redux';

import Expenses from './Expenses';
import { asyncSetExpenses } from '../../redux/modules/expense';

class ExpensesContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(asyncSetExpenses(this.props.expenses));
  }
  render() {
    return <Expenses />;
  }
}

const mapStateToProps = state => ({
  expenses: state.expense
});

export default connect(mapStateToProps)(ExpensesContainer);

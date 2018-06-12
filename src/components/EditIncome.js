import React from 'react';
import { connect } from 'react-redux';

import IncomeForm from './IncomeForm';
import { asyncSetIncome, asyncEditIncome } from '../redux/modules/income';

class EditIncome extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.income);
    this.props.dispatch(asyncSetIncome(this.props.income));
  }

  incomeSubmit = income => {
    console.log(income);
    this.props.dispatch(asyncEditIncome(this.props.income.id, income));
  };
  render() {
    return (
      <IncomeForm income={this.props.income} incomeSubmit={this.incomeSubmit} />
    );
  }
}

const mapStateToProps = (state, props) => ({
  income:
    state.income.income.length &&
    state.income.income.find(item => item.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditIncome);

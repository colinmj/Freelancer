import React from 'react';
import { connect } from 'react-redux';

import IncomeForm from './IncomeForm';
import {
  asyncSetIncome,
  asyncEditIncome,
  asyncRemoveIncome
} from '../redux/modules/income';

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
    this.props.history.push('/income');
  };

  incomeDelete = () => {
    this.props.dispatch(asyncRemoveIncome({ id: this.props.income.id }));
    this.props.history.push('/income');
  };
  render() {
    return (
      <div>
        <IncomeForm
          income={this.props.income}
          incomeSubmit={this.incomeSubmit}
        />
        <button onClick={this.incomeDelete}>Remove This Income</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  income:
    state.income.income.length &&
    state.income.income.find(item => item.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditIncome);

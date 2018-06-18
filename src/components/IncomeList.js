import React from 'react';

import IncomeListItem from './IncomeListItem';
import { filterIncome } from '../redux/modules/income';

class IncomeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list_container">
        <div className="label_container">
          <p>Income</p>
          <p>Amount</p>
        </div>
        {this.props.income &&
          this.props.income.length > 0 &&
          this.props.income.map(item => {
            return <IncomeListItem {...item} />;
          })}
      </div>
    );
  }
}

export default IncomeList;

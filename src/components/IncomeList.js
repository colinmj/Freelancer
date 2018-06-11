import React from 'react';
import ListItem from './ListItem';

import { filterIncome } from '../redux/modules/income';

class IncomeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.selected);
    return (
      <div>
        <h1> List of Income </h1>
        {console.log(this.props)}
        {this.props.income &&
          this.props.income.length > 0 &&
          this.props.income.map(item => {
            return <ListItem {...item} />;
          })}
      </div>
    );
  }
}

export default IncomeList;

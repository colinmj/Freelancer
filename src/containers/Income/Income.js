import React from 'react';
import MultiSelect from '../../components/IncomeSelect';
import IncomeList from '../../components/IncomeList';

class Income extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let filtered =
      this.props.income.length &&
      this.props.income.filter(item =>
        item.categories.find(i => this.props.selected.includes(i))
      );

    console.log(filtered);
    console.log(this.props.selected);

    return (
      <div>
        <IncomeList
          income={
            this.props.selected.length === 0 ? this.props.income : filtered
          }
          selected={this.props.selected}
        />
        <MultiSelect categories={this.props.categories} />
      </div>
    );
  }
}

export default Income;

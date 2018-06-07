import React from 'react';

import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';

import { filterIncome } from '../redux/modules/income';

class MultipleSelect extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {}

  handleChange = (event, index, values) => {
    this.props.dispatch(filterIncome(event.target.value));
    console.log(this.props);
  };

  render() {
    const { selected, income, categories } = this.props;

    return (
      <div>
        <Select
          multiple={true}
          value={selected ? selected : []}
          onChange={this.handleChange}
        >
          {categories &&
            categories.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
        </Select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  income: state.income,
  selected: state.income.selectedCategories
});

export default connect(mapStateToProps)(MultipleSelect);

import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';

import { filterExpenses } from '../redux/modules/expense';

class MultipleSelect extends React.Component {
  state = {
    categories: []
  };

  handleChange = (event, index, values) => {
    this.props.dispatch(filterExpenses(event.target.value));
    console.log(this.props);
  };

  render() {
    const { selected, expenses, categories, rendered } = this.props;

    return (
      <div>
        <InputLabel htmlFor="age-helper">Categories</InputLabel>
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
  expenses: state.income,
  selected: state.expense.selectedCategories,
  rendered: state.categories.renderedCategories
});

export default connect(mapStateToProps)(MultipleSelect);

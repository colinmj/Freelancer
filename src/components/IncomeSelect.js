import React from 'react';

import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';

import createHistory from 'history/createBrowserHistory';

import { filterIncome } from '../redux/modules/income';
import {
  setRenderedCategories,
  asyncSetCategories
} from '../redux/modules/categories';
import { objectToArray } from '../helpers/category';

class MultipleSelect extends React.Component {
  state = {
    categories: []
  };

  handleChange = (event, index, values) => {
    this.props.dispatch(filterIncome(event.target.value));
    console.log(this.props);
  };

  componentDidMount() {
    const history = createHistory();
    console.log(history);
  }

  render() {
    const { selected, income, categories, rendered } = this.props;

    console.log(rendered);
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
  selected: state.income.selectedCategories,
  newcats: state.categories.categories,
  rendered: state.categories.renderedCategories
});

export default connect(mapStateToProps)(MultipleSelect);

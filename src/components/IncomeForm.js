import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';

import {
  asyncAddCategories,
  asyncSetCategories,
  setRenderedCategories
} from '../redux/modules/categories';
import { objectToArray, renderCategories } from '../helpers/category';

class IncomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.income ? this.props.income.title : '',
      amount: this.props.income
        ? (this.props.income.amount / 100).toString()
        : '',
      created: this.props.income ? moment(this.props.income.created) : moment(),
      description: this.props.income ? this.props.income.description : '',
      selectedCategories: [], // is this doing anything?
      calendarFocused: false,
      categories: this.props.income ? this.props.income.categories : '',
      error: ''
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState({ title });
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        amount
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({
      calendarFocused: focused
    });
  };

  onDateChange = created => {
    if (created) {
      this.setState({
        created
      });
    }
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({
      description
    });
  };

  onCategoriesChange = e => {
    const categoriesString = e.target.value;
    const categories = categoriesString.split(',');
    this.setState({
      categories
    });
  };

  renderCategories = arr => {
    let newArr = [];
    arr.map(array => {
      newArr.push(Object.values(array));
    });
    const merged = [].concat.apply([], newArr);
    return merged;
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.incomeSubmit({
      title: this.state.title,
      amount: parseFloat(this.state.amount, 10) * 100,
      created: this.state.created.valueOf(),
      description: this.state.description,
      categories: this.state.categories
    });
    this.props.dispatch(asyncAddCategories(this.state.categories));
    this.props.dispatch(asyncSetCategories());

    let willRenderCategories = [];
    let array = objectToArray(this.props.categories);

    const rendered = renderCategories(array, this.state.categories);

    this.props.dispatch(setRenderedCategories(rendered));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input
            placeholder="Title"
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            placeholder="Amount"
            onChange={this.onAmountChange}
            type="number"
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.created}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Description"
            onChange={this.onDescriptionChange}
            value={this.state.description}
          />
          <input
            placeholder="Categories"
            onChange={this.onCategoriesChange}
            value={this.state.categories}
          />

          <button
            disabled={!(this.state.title !== '' && this.state.amount !== '')}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories
});

export default connect(mapStateToProps)(IncomeForm);

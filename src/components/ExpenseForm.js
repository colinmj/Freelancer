import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      amount: '',
      created: moment(),
      description: '',
      categories: '',
      calendarFocused: false,
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
    const categories = categoriesString.split(' ');
    this.setState({
      categories
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.expenseSubmit({
      title: this.state.title,
      amount: parseFloat(this.state.amount, 10) * 100,
      created: this.state.created.valueOf(),
      description: this.state.description,
      categories: this.state.categories
    });
  };

  render() {
    console.log(this.state.title);
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

          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;

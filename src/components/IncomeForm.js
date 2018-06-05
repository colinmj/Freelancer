import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';

import MultiSelect from '../components/MultiSelect';

import { setSelectedCategories } from '../redux/modules/categories';

class IncomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      amount: '',
      created: moment(),
      description: '',
      selectedCategories: [],
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

  // onCategoriesChange = e => {
  //   const value = e.target.value;
  //   this.setState({
  //     categories: this.state.categories.concat(value)
  //   });
  // };

  onCategoriesChange = selectedOption => {
    this.props.dispatch(setSelectedCategories(selectedOption));
  };
  // onCategoriesChange = () => {
  //   console.log('hi');
  // };

  renderOptions = () => {
    return ['apples', 'oranges', 'bananas', 'kiwis'].map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.incomeSubmit({
      title: this.state.title,
      amount: parseFloat(this.state.amount, 10) * 100,
      created: this.state.created.valueOf(),
      description: this.state.description
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
          <MultiSelect onCategoriesChange={this.onCategoriesChange} />

          <button>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedCategories: state.categories.selectedCategories
});

export default connect(mapStateToProps)(IncomeForm);

// <select multiple={true} onChange={this.onCategoriesChange}>
// <option value="gig">Gig</option>
// <option value="dev">Dev</option>
// <option value="groceries">Groceries</option>
// <option value="cheese">Cheese</option>
// </select>

import 'react-dates/initialize';
import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../redux/modules/filters';

class FilterList extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState({
      calendarFocused
    });
  };

  render() {
    return (
      // <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
            className="text-input"
            type="text"
            placeholder="Search"
            value={this.props.filters.text}
            onChange={e => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>

        <div className="input-group__item">
          <select
            className="select"
            value={this.props.filters.sortBy}
            onChange={e => {
              console.log(e.target.value);
              if (e.target.value === 'date') {
                this.props.dispatch(sortByDate());
              } else if (e.target.value === 'amount') {
                this.props.dispatch(sortByAmount());
              }
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        <div className="input-group__item">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(FilterList);

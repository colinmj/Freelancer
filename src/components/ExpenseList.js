import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const ExpenseList = props => {
  return (
    <div>
      <h1> List of Expenses </h1>
      {console.log(props)}
      {props.expenses.length > 0 &&
        props.expenses.map(item => {
          return <ListItem {...item} />;
        })}
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: state.expense,
  selectedCategories: state.categories.selectedCategories
});

export default connect(mapStateToProps)(ExpenseList);

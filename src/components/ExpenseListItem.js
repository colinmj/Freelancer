import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ title, amount, created, description, id }) => {
  return (
    <div className="list_item">
      <div className="title_date">
        <Link to={`/editexpense/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{moment(created).format('MMMM Do, YYYY')}</p>
      </div>
      <p className="description">{description}</p>
      <p>{numeral(amount / 100).format('$0,0.00')} </p>
    </div>
  );
};

export default ExpenseListItem;

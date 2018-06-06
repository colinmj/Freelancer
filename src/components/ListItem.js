import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ListItem = ({ title, amount, created, description }) => {
  return (
    <div>
      <h4>{title} </h4>
      <p>{amount}</p>
      <p>{created}</p>
      <p>{description}</p>
    </div>
  );
};

export default ListItem;

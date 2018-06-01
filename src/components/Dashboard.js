import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardPage = () => (
  <div>
    <NavLink to="/income" activeClassName="is-active">
      My Income
    </NavLink>
    <NavLink to="/expenses" activeClassName="is-active">
      My Expenses
    </NavLink>
  </div>
);

export default DashboardPage;

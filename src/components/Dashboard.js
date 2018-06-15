import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardPage = () => (
  <div className="dashboard_container">
    <div className="dashboard_link">
      <NavLink to="/income" activeClassName="is-active">
        My Income
      </NavLink>
    </div>

    <div className="dashboard_link">
      <NavLink to="/expenses" activeClassName="is-active">
        My Expenses
      </NavLink>
    </div>
  </div>
);

export default DashboardPage;

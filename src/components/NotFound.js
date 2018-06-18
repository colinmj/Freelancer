import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not_found">
    <p>
      Sorry, there's nothing here! => <Link to="/">Go Home</Link>
    </p>
  </div>
);

export default NotFoundPage;

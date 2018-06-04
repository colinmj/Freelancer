import React from 'react';

import CategoriesForm from '../../components/CategoriesForm';

const Categories = ({ categoriesSubmit }) => {
  return (
    <div>
      <h1>Add Categories </h1>
      <p>
        Here you have the ability to tailor Freelancer to your specific needs by
        adding your own categories. The categories you add here will appear in
        the drop down when you add income or expenses, and then you can filter
        accordingly.
      </p>

      <CategoriesForm categoriesSubmit={categoriesSubmit} />
    </div>
  );
};

export default Categories;

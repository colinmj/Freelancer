// import React from 'react';
// import { connect } from 'react-redux';

// import Categories from './Categories';
// import { asyncAddCategories } from '../../redux/modules/categories';

// class CategoriesContainer extends React.Component {
//   categoriesSubmit = categories => {
//     const categoriesArray = categories.join().split(',');
//     console.log(categoriesArray);
//     this.props.dispatch(asyncAddCategories(categoriesArray));
//   };

//   render() {
//     return <Categories categoriesSubmit={this.categoriesSubmit} />;
//   }
// }

// const mapStateToProps = state => ({
//   categories: state.categories
// });

// export default connect(mapStateToProps)(CategoriesContainer);

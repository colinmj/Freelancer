// import React from 'react';

// class CategoriesForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       categories: ''
//     };
//   }
//   onCategoriesChange = e => {
//     const categoriesString = e.target.value;
//     const categories = categoriesString.split(',');

//     this.setState({
//       categories
//     });
//   };
//   onFormSubmit = e => {
//     e.preventDefault();
//     this.props.categoriesSubmit(this.state.categories);
//   };
//   render() {
//     return (
//       <form onSubmit={this.onFormSubmit}>
//         <input
//           placeholder="Categories"
//           onChange={this.onCategoriesChange}
//           value={this.state.categories}
//         />
//         <button>Add Categories</button>
//       </form>
//     );
//   }
// }

// export default CategoriesForm;

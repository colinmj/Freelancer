const cats = ['tuna', 'pickles'];

const objs = [
  { name: 'Colin', age: 26, likes: ['tuna', 'cheese'] },
  { name: 'Alex', age: 45, likes: ['chips', 'ass'] },
  { name: 'Chris', age: 20, likes: ['pickles', 'tits'] }
];

export const filteredIncome = (arr1, arr2) => {
  return arr1.filter(obj => {
    return obj.categories && obj.categories.find(i => arr2.includes(i));
  });
};

console.log(filteredIncome(objs, cats));

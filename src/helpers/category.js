const fillerData = [
  {
    0: 'Colin',
    2: '26',
    4: 'yes'
  },
  {
    name: 'Chris',
    age: 30,
    sexy: 'yes'
  }
];

export const objectToArray = arr => {
  let newArr = [];
  arr.map(array => {
    newArr.push(Object.values(array));
  });
  const merged = [].concat.apply([], newArr);
  return merged.filter((item, index) => {
    return merged.indexOf(item) === index;
  });
};

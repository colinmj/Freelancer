export const objectToArray = arr => {
  let newArr = [];
  arr.map(array => {
    newArr.push(Object.values(array));
  });
  const merged = [].concat.apply([], newArr);
  const catsArray = merged.filter((item, index) => {
    return merged.indexOf(item) === index;
  });
  return catsArray.filter(item => item !== ' ' && item !== '');
};

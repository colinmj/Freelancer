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

export const filterCategories = (arr, categories) => {
  return arr.filter(
    item =>
      item.categories.length &&
      item.categories.find(i => categories.includes(i))
  );
};

export const renderCategories = (arr, stateCategories) => {
  let toBeRendered = [];
  arr.map(item => toBeRendered.push(item));
  toBeRendered = toBeRendered.concat(stateCategories);

  toBeRendered = toBeRendered.filter((item, index) => {
    return toBeRendered.indexOf(item) === index;
  });

  toBeRendered = toBeRendered.filter(item => item !== ' ' && item !== '');
  return toBeRendered;
};

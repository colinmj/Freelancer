import numeral from 'numeral';

export const total = arr => {
  let total = [];
  arr.map(item => {
    total.push(item.amount);
  });
  let hi = total.reduce((a, b) => {
    return a + b;
  });
  hi = numeral(hi / 100).format('$0,0.00');
  return `Displaying ${arr.length} items with a whopping total of ${hi}`;
};

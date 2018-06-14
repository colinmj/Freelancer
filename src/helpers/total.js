import numeral from 'numeral';

export const total = arr => {
  const items = 'items';
  const item = 'item';
  let total = [];
  arr.map(item => {
    total.push(item.amount);
  });
  let hi = total.reduce((a, b) => {
    return a + b;
  });
  hi = numeral(hi / 100).format('$0,0.00');
  return `Displaying ${arr.length} 
    ${arr.length > 1 ? items : item}
   with a whopping total of ${hi}`;
};

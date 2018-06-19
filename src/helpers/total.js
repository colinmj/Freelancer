import numeral from 'numeral';

export const total = arr => {
  const items = 'items';
  const item = 'item';
  let total = [];
  arr.map(item => {
    total.push(item.amount);
  });
  let totalAmount = total.reduce((a, b) => {
    return a + b;
  });
  totalAmount = numeral(totalAmount / 100).format('$0,0.00');
  return `Displaying ${arr.length} 
    ${arr.length > 1 ? items : item}
   with a total of ${totalAmount}`;
};

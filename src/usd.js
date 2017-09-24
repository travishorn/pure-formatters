export default (amount, denomination) => {
  let nAmount = parseFloat(amount);

  if (denomination === 'c') {
    nAmount /= 100;
  }

  return `$${nAmount.toFixed(2)}`;
};

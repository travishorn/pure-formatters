export default (input, display) => {
  if (input === null) return display || 'null';
  if (input === '') return display || 'null';
  return input;
};

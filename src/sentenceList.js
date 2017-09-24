export default (inputArray, key) => {
  let output = '';

  if (inputArray.length === 1) {
    if (!key) {
      output = inputArray[0];
    } else {
      output = inputArray[0][key];
    }
  } else if (inputArray.length === 2) {
    if (!key) {
      output = `${inputArray[0]} and ${inputArray[1]}`;
    } else {
      output = `${inputArray[0][key]} and ${inputArray[1][key]}`;
    }
  } else {
    inputArray.forEach((item, i) => {
      if (i === inputArray.length - 1) {
        output += 'and ';
      }

      if (!key) {
        output += item;
      } else {
        output += item[key];
      }

      if (inputArray.length !== 2 && i < inputArray.length - 1) {
        output += ', ';
      }
    });
  }

  return output;
};

const addSpacesToNumber = (number) => {
  let val = number.toString();
  let res = '';

  while (val.length > 3) {
    res = ` ${val.slice(-3)}${res}`;
    val = val.slice(0, -3);
  }

  return `${val}${res}`;
};

export default addSpacesToNumber;

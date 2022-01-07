function string2array(str, size) {
  str = str.split(",");
  let array = [];
  for (var i = 0; i < size; ++i) {
    let inArray = [];
    for (var j = 0; j < size; ++j) inArray.push(parseInt(str[i * size + j]));
    array.push(inArray);
  }
  console.log(array);
  return array;
}

function randomIndex(size) {
  const i = Math.floor(Math.random() * size);
  const j = Math.floor(Math.random() * size);
  return [i, j];
}

function randomNumber(size) {
  if (size === 4) {
    return Math.random() > 0.112345 ? 2 : 4;
  } else if (size === 5) {
    return Math.random() > 0.23456 ? 2 : Math.random() > 0.23456 ? 4 : 8;
  } else {
    return Math.random() > 0.23456
      ? 2
      : Math.random() > 0.23456
      ? 4
      : Math.random() > 0.23456
      ? 8
      : 16;
  }
}

function makeStringAuto(size, str) {
  let s = "";
  for (let i = 0; i < size; i++) s += str + " ";
  return s;
}

function initialArray(size) {
  let array = [];
  for (var i = 0; i < size; ++i) {
    let inArray = [];
    for (var j = 0; j < size; ++j) {
      inArray.push(0);
    }
    array.push(inArray);
  }
  const [x, y] = randomIndex(size);
  array[x][y] = randomNumber(size);
  return array;
}

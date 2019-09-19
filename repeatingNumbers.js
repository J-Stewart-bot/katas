let repeatNumbers = function(data) {
  let results = "";
  for (const index of data) {
    for (let i = 0; i < index[1]; i++) {
      results += index[0];
    }
    if (index != data[data.length - 1]) {
      results += ", "
    }
  }
  return results
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
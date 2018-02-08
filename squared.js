const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squared(array) {
  return _.partition(array, num => Math.sqrt(num) % 1 === 0);
}

console.log(squared(testArray));

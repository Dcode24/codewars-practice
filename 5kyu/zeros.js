// Parameters: A single array with multiple types of elements including numbers, strings, booleans
// Return: A single array with the same elements BUT the zeros are moved to the end of the array.
// The other elements should remain in the same location in the array.
// Examples:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
// moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
// Pseudocode: iterate over the starting array and identify the zeros.
// We could take the existing zeros and move them to the end of the array
// or we could count the zeros, remove them, then append the correct number of zeros
// to the end of the array.
// Proposed solution - iterate through the original array and assign each value
// to a new array bucket depending on if zero or not. Join the buckets together and output

function moveZeros(array) {
  let catchall = [];
  let zeros = [];

  for (let i = 0; i < array.length; i++) {
    array[i] === 0 ? zeros.push(array[i]) : catchall.push(array[i]);
  }
  return [...catchall, ...zeros];
}
// moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);

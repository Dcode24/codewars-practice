/*Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the 
missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/

// PREP

// Parameters: A string that is split into pairs of two characters
// Return: Replace an array the missing second character of the final pair with an underscore if the string contains an odd number
// Example: assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
// assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// assert.deepEqual(solution(""), []);
// Pseudocode: Create a variable that holds the value of the split string, create a new variable and set it to an empty array.
// use a if statement to see whether its even or odd, if it's odd.. push '_'
// use a for loop to iterate the array  and use push method to add the arr together

function solution(str) {
  let arr = str.split('');
  let newArr = [];

  if (arr.length % 2 == 1) {
    arr.push('_');
  }
  for (i = 0; i < arr.length; i = i + 2) {
    newArr.push(arr[i] + arr[i + 1]);
  }
  return newArr;
}

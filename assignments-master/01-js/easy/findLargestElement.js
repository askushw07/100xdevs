/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = -1;
    for (let i of numbers) {
        if (max < i) max = i;
    }
    return max;
}

module.exports = findLargestElement;
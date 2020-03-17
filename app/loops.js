// 1. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
  let sum = 0;
  for (let index = n1; index <= n2; index++) {
    sum += index
  }
  return sum

}


// ------------------------------------------


// 2. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
  let sum = 1;
  for (let index = 1; index <= num; index++) {
    sum *= index
  }
  return sum
}


// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and rtuen how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
  let sum = 0;
  for (let index = start; index <= end; index++) {
    if (index % divisor == 0) {
      sum++
    }

  }
  return sum

}
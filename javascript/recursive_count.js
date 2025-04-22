function recursiveCount(num = 0) {
  // type your code here

  if(num < 10){
    console.log(num)
    recursiveCount(num + 1);
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file

// log the numbers from 0 to 9 with recursive call functions.
// console log the number => base case if num is less than 10.
// call function again until it reaches base case.



// And a written explanation of your solution

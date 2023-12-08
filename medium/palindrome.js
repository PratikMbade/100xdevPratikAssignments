/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/



function isPalindrome(str) {

  const norStr = str.toLowerCase().replace(/[^a-z0-9]+/g, "");
  let i = 0;
  let j = norStr.length - 1;
  while (i < j) {
     

      if (norStr[i] !== norStr[j]) {
          return false;
      } else {
          i++;
          j--;
      }
  }
  return true;
}
module.exports = isPalindrome;

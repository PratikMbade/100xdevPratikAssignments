/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(word){
  let char = word.toLowerCase();
  if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
    return true;
  }

  return false;
}

function countVowels(str) {
    let vowelsOcc = 0;
    for(let i = 0;i<str.length;i++){
      if(isVowel(str[i])){
        vowelsOcc = vowelsOcc + 1;
      }
     
    }

    return vowelsOcc;
}

module.exports = countVowels;
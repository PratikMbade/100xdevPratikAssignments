/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let freqTable = {};


  for (let i = 0; i < str1.length; i++) {
    freqTable[str1[i].toLowerCase()] = (freqTable[str1[i].toLowerCase()] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    freqTable[str2[i].toLowerCase()] = (freqTable[str2[i].toLowerCase()] || 0) - 1;
  }

  for (let key in freqTable) {
    if (freqTable[key] !== 0) {
      return false;
    }
  }
  return true;


}

module.exports = isAnagram;

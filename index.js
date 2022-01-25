function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  1. write a function isPalindrome that takes in 1 string as an argument
  2. Function must return true if the string is a palindrome. Return false if not palindrome
*/

/*
  Add written explanation of your solution here
  
*/
function isPalindrome(string) {
  const reversed = string.split("").reverse().join("");
  if (string === reversed) return true;
  else return false;
}

isPalindrome("racecar");

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

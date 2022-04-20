function isPalindrome(word) {
  console.log(word);
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  console.log(reversed);
  if (word === reversed) return true;
  else return false;
}

console.log(isPalindrome("racecar"));

// /*
//   Add your pseudocode here
// 1. function takes in a string. If string.reversed === string, then isPalindrome returns true
// */

// /*
//   Add written explanation of your solution here

// */

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

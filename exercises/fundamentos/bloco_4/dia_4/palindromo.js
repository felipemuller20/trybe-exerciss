function palindrome(word) {
  let reverseWordLength = word.length;
  let reverseWord = '';
  for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[reverseWordLength-1];
    reverseWordLength -= 1;
  }
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('arara'));
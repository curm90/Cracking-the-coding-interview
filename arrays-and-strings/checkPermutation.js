/*
  If input does not exist or is empty or string lengths dont match - return false
  Sort both strings
  Iterate over string 'a' and check if each char is equal to the same char in string 'b'
  Return true if it makes it out of the loop
  Else return false
*/

const checkPermuation = (a, b) => {
  if (!a || a.length === 0 || a.length !== b.length) return false;

  const aCopySorted = a.split('').sort();
  const bCopySorted = b.split('').sort();

  for (let i = 0; i < aCopySorted.length; i++) {
    if (aCopySorted[i] !== bCopySorted[i]) {
      return false;
    }
  }
  return true;
};

/*
  Build up hash map with frequencies of letters in string 'a'
  Iterate over string b 
  If letter in cache at that letter is greater than 1 - decrement the count
  Else (if its 1 or less) remove the property from the cache
  Then return true if the cache length is less than 1
*/

const checkPermuation = (a, b) => {
  if (!a || a.length === 0 || a.length !== b.length) return false;

  const cache = {};

  for (const letter of a) {
    cache[letter] ? cache[letter]++ : (cache[letter] = 1);
  }

  for (const letter of b) {
    if (cache[letter] > 1) {
      cache[letter]--;
    } else {
      delete cache[letter];
    }
  }

  return Object.keys(cache).length < 1;
};

/* 
  Same as solution one except we use every (array method) 
  to verify every letter matches in each string
*/

const checkPermuation = (a, b) => {
  if (!a || a.length === 0 || a.length !== b.length) return false;

  const aCopySorted = a.split('').sort();
  const bCopySorted = b.split('').sort();

  return aCopySorted.every((letter, i) => letter === bCopySorted[i]);
};

console.log(checkPermuation('abc', 'bca'), true);
console.log(checkPermuation('abccc', 'bcaca'), false);
console.log(checkPermuation('aaaa', 'aaaa'), true);
console.log(checkPermuation('aaabbbcc', 'aaabbcc'), false);
console.log(checkPermuation(), false);

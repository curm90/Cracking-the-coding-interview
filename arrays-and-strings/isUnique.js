/*
  Check if input exists and is of correct type
  Create a new set with values from input
  Check if the size (length) of the set is equal to original array
*/

const isUnique = (s) => {
  if (!s || typeof s !== 'string') return false;

  const uniqueChars = new Set(s);

  return uniqueChars.size === s.length;
};

/*
  Populate a hash map with the frequency of letters from input string
  Iterate over string and find first property whos value is greater than one
*/

const isUnique = (s) => {
  if (!s || typeof s !== 'string') return false;

  const cache = {};

  for (const letter of s) {
    cache[letter] ? cache[letter]++ : (cache[letter] = 1);
  }

  for (const letter of s) {
    if (cache[letter] > 1) {
      return false;
    }
  }

  return true;
};

/*
  Sort input string
  Duplicate values will apear next to each other
  Iterate over array and check id the current letter is equal to next letter
*/

const isUnique = (s) => {
  if (!s || typeof s !== 'string') return false;

  const sortedString = s.split('').sort();

  for (let i = 0; i < sortedString.length; i++) {
    if (sortedString[i] === sortedString[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(isUnique('abcde'), true);
console.log(isUnique('abcdee'), false);
console.log(isUnique('aaaaa'), false);
console.log(isUnique(), false);

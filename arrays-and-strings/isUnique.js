const isUnique = (s) => {
  if (!s || typeof s !== 'string') return false;

  const uniqueChars = new Set(s);

  return uniqueChars.size === s.length;
};

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

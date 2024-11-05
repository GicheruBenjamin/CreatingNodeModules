
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export function isPalindrome(str) {
  return str.toLowerCase() === reverseString(str.toLowerCase());
}

export function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}
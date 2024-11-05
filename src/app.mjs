import { add } from "./utils/math.mjs";
import { subtract } from "./utils/math.mjs";
import { capitalize } from "./utils/str.mjs";
import { reverseString } from "./utils/str.mjs";
import { isPalindrome } from "./utils/str.mjs";
import { countVowels } from "./utils/str.mjs";

// Test the functions
console.log(add(2, 3)); 
console.log(subtract(5, 2));
console.log(capitalize("hello"));
console.log(reverseString("hello"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(countVowels("hello"));

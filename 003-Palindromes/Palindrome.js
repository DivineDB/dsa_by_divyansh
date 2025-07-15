// Checks whether a given string is a palindrome.

// An arrow function is assigned to the variable "isPalindrome".
// It takes a string "str", reverses it, and compares it to the original string.
// If they match, it returns "Palindrome"; otherwise, "Not a Palindrome".

// A ternary operator ( `condition ? valueIfTrue : valueIfFalse` ) is used
// instead of an if-else block for concise syntax.

const isPalindrome = str => str === str.split("").reverse().join("")
? "Palindrome" : "Not a Palindrome";

console.log(isPalindrome("abba"));
console.log(isPalindrome("divyansh"));

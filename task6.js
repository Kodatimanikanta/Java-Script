let originalText = "Hello, 10k Coders";

let removedSpacesText = originalText
    .split(" ")
    .join("");
console.log(removedSpacesText);

//Result : Hello,10kCoders

let original = "Hello World";
let reversed = original.split('').reverse().join('');
console.log(reversed);

//Result : dlroW olleH



let inputString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let asciiValues = Array.from(inputString, (char) => {
  return char.charCodeAt(0);
});
 
console.log(
  "ASCII values of characters in '" +
    inputString +
    "': " +
    asciiValues.join(", ")
);

//Result : ASCII values of characters in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ': 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90
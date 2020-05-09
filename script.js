//-----Define Variables
// Assignment Code
var generateBtn = document.querySelector("#generate");

//ABC Uppecase
var charsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//ABC Lowercase
var charsLowercase = "abcdefghijklmnopqrstuvwxyz";
//Special Characters
var charsSpecial = "!@#$%^&*()_-+=`~,.<>?/|";
//Numbers
var charsNums = "0123456789";
//All Characters
var charsAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=`~,.<>?/|0123456789"

var welcomePrompt = prompt("What kind of characters would you like to include in your password? Enter 'l' for lowecase, 'u' for uppercase, 'n' for numbers, 's' for special characters, or 'all' for all character types.")
welcomePrompt = welcomePrompt.toLocaleLowerCase();

//-----Psuedocode for new function
// Name function
// Define variable for password to return to
// Define string
// Define loop for length of strength and random selection
// Combine random selection together
// Return to variable
// Add to generateBtn order

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//-----Call Functions
// Add event listener to generate button
generateBtn.addEventListener("click", welcomePrompt);
generateBtn.addEventListener("click", writePassword);

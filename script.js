//-----Define Variables
// Assignment Code
var generateBtn = document.querySelector("#generate");

//-----Functions
// Welcome user and confirm they want to generate a password
function welcomePrompt() {
  confirm("Please answer the following questions to generate your password. Click ok to begin.");
}

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

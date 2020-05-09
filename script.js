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


// Write password to the #password input
function writePassword() {
  var welcomePrompt = prompt("What kind of characters would you like to include in your password? Enter 'l' for lowercase, 'u' for uppercase, 'n' for numbers, 's' for special characters, or 'all' for all character types.")
  welcomePrompt = welcomePrompt.toLocaleLowerCase();

  if (welcomePrompt === "l") {
    var lengthPrompt = prompt( "How many characters long would you like your password to be? Please enter a number between 8 and 128");
    var lengthNumber = parseInt(lengthPrompt);
    console.log(lengthNumber);

    function makeLowerCasePasswd() {
      var passwd = '';
      var chars = 'abcdefghijklmnopqrstuvwxyz';
      for (i=1; i<lengthNumber; i++) {
        var c = Math.floor(Math.random()*chars.length + 1);
        passwd += chars.charAt(c)
      }
      return passwd;
    }
    var confirmPassword = confirm("Click ok for your new password")
      if (confirmPassword === true){
        alert("Your new password is " + makeLowerCasePasswd())
      }
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//-----Call Functions
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

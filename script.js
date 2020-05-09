// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var welcomePrompt = prompt("What kind of characters would you like to include in your password? Enter 'l' for lowercase, 'u' for uppercase, 'n' for numbers, 's' for special characters, or 'all' for all character types.")
  welcomePrompt = welcomePrompt.toLocaleLowerCase();
// If statements for each letter selection
  if (welcomePrompt === "l") { // Lowercase-only password
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
  else if (welcomePrompt === "u") { // Uppercase-only password
    var lengthPrompt = prompt( "How many characters long would you like your password to be? Please enter a number between 8 and 128");
    var lengthNumber = parseInt(lengthPrompt);
    console.log(lengthNumber);

    function makeUpperCasePasswd() {
      var passwd = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (i=1; i<lengthNumber; i++) {
        var c = Math.floor(Math.random()*chars.length + 1);
        passwd += chars.charAt(c)
      }
      return passwd;
    }
    var confirmPassword = confirm("Click ok for your new password")
      if (confirmPassword === true){
        alert("Your new password is " + makeUpperCasePasswd())
      }
  }
  else if (welcomePrompt === "n") { // Numbers-only password
    var lengthPrompt = prompt( "How many characters long would you like your password to be? Please enter a number between 8 and 128");
    var lengthNumber = parseInt(lengthPrompt);
    console.log(lengthNumber);

    function makeNumberPasswd() {
      var passwd = '';
      var chars = '0123456789';
      for (i=1; i<lengthNumber; i++) {
        var c = Math.floor(Math.random()*chars.length + 1);
        passwd += chars.charAt(c)
      }
      return passwd;
    }
    var confirmPassword = confirm("Click ok for your new password")
      if (confirmPassword === true){
        alert("Your new password is " + makeNumberPasswd())
      }
  }
  else if (welcomePrompt === "s") { //Special characters-only password
    var lengthPrompt = prompt( "How many characters long would you like your password to be? Please enter a number between 8 and 128");
    var lengthNumber = parseInt(lengthPrompt);
    console.log(lengthNumber);

    function makeSpecialCharPasswd() {
      var passwd = '';
      var chars = '!@#$%^&*()_-+=`~,.<>?/|';
      for (i=1; i<lengthNumber; i++) {
        var c = Math.floor(Math.random()*chars.length + 1);
        passwd += chars.charAt(c)
      }
      return passwd;
    }
    var confirmPassword = confirm("Click ok for your new password")
      if (confirmPassword === true){
        alert("Your new password is " + makeSpecialCharPasswd())
      }
  }
  else if (welcomePrompt === "all") { //All characters combination password
    var lengthPrompt = prompt( "How many characters long would you like your password to be? Please enter a number between 8 and 128");
    var lengthNumber = parseInt(lengthPrompt);
    console.log(lengthNumber);

    function makeAllCharPasswd() {
      var passwd = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=`~,.<>?/|0123456789';
      for (i=1; i<lengthNumber; i++) {
        var c = Math.floor(Math.random()*chars.length + 1);
        passwd += chars.charAt(c)
      }
      return passwd;
    }
    var confirmPassword = confirm("Click ok for your new password")
      if (confirmPassword === true){
        alert("Your new password is " + makeAllCharPasswd())
      }
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

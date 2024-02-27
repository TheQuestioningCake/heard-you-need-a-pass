// Assignment code here
function generatePassword() {
  var numCh = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specCh = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "?", "<", ">", ",", ".", "-", "_", "[", "]", "'", '"', "=", "+", "\\", "|"];
  var letterCh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var space = [];

  // this allows us to create a message and command prompt for the user to select the amount of characters
  var userInput = window.prompt("How many characters would you like your password to be, please pick between 8-128");
  console.log(userInput);

  // this is so a user is unable to put any number of characters that is 8-128, tried using isNaN() just incase the user put a letter, but couldn't get it to work.
  if (userInput < 8 || userInput > 128) {
    return "Sorry we're unable to generate a password with that amount of characters, can you please pick a valid amount of 8-128";
  }
  // this creates in window.confirm so the user can clarify what characters they want in their password
  else {
    window.alert("Your password will be " + userInput + " characters");
    var askLower = window.confirm("Would you like lowercase letters?");
    if (askLower === true) {
      space = space.concat(letterCh);

    } console.log(space)
    var askUpper = window.confirm("Would you like uppercase letters?");
    if (askUpper === true) {
      space = space.concat(letterCh.map(letter => letter.toUpperCase()));
    }
    console.log(space)
    var askNum = window.confirm("Would you like numbers?");
    if (askNum === true) {
      space = space.concat(numCh);
    } console.log(space);
    var askSpec = window.confirm("Would you like special characters?");
    if (askSpec === true) {
      space = space.concat(specCh);
    } console.log(space);
    if (askLower === false && askUpper === false && askNum === false && askSpec === false) {
      return "Can't generate a password without characters"
    }
// we use this method so the users password will be random generated
    let userPassword = " "
    for (let i = 0; i < userInput; i++) {
      let pass = Math.floor(Math.random() * space.length);
      userPassword = userPassword + space[pass];
    }
// so it shows the users password on the page 
    return userPassword
  }



  // return "hello"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

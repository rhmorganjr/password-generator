// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
  retrieve the desired password length
*/
function getPasswordLength() {
  return window.prompt("Enter the length desired? (8 to 128) ");
}

/*
  check the entered value is >= 8 and <= 128; this will also handle non-numeric values
*/
function isPasswordLenValid(pwdLen) {
  if (pwdLen >= 8 && pwdLen <= 128) {
    return true;
  }
  else {
    window.alert("The length must be between 8 and 128 (inclusive) and must be numeric");
    return false;
  }
}

/*
  check the entry for 4 characters and only 'y' or 'n' entered
*/
function isCharacterSetValid(enteredString) {
  if (enteredString.length !== 4) {
    window.alert("The length must be 4 characters!");
    return false;
  }
  else if (enteredString.toUpperCase() === "NNNN") {
    window.alert("You must enter at least 1 Y");
    return false;
  }
  else {
    for (let i = 0; i < enteredString.length; i++) {
      if (enteredString.charAt(i).toUpperCase() !== 'Y' && enteredString.charAt(i).toUpperCase() !== 'N' ) {
        window.alert("Must only use y or n - not case sensitive!");
        return false;
      }
    }
  }

  return true;
}

/*
  prompt the user for types of characters to use to generate password
*/
function getCharacterSets() {
  let characterSet = window.prompt("Select the characters you would like to use: \n\n" +
    "\tUppercase letters? y or n \n" +
    "\tLowercase letters? y or n \n" +
    "\tNumbers? y or n \n" +
    "\tSpecial characters? y or n" +
    "\n\n" +
    "Enter as 4 characters (ie:yyny or ynyn) and must enter 4 letters!");

    return characterSet;
}
/*
  Generate the password
*/
function generatePassword() {
  let keepGoing = true;

  // retrieve length 8 to 128
  var passwordLen = getPasswordLength();
  if (passwordLen === null) {
    keepGoing = false;         // cancel selected
  }
  else {
    while (!isPasswordLenValid(passwordLen)) {
      passwordLen = getPasswordLength();
      if (passwordLen === null) {
        keepGoing = false;
        break;
      }
    }
  }

  // retrieve characters types
  if (keepGoing) {
    var characterSets = getCharacterSets();
    if (characterSets === null) {
      keepGoing = false;         // cancel selected
    }
    else {
      while (!isCharacterSetValid(characterSets)) {
        characterSets = getCharacterSets();
      }
    }
  }

  // Build character string based on sets
  if (keepGoing) {
    return buildPassword(passwordLen, characterSets);
  }
  else {
    return "Cancelled password generation";
  }
}

/*
  based on length and character sets, create password
*/
function buildPassword( len, sets) {
  const charSets = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#$%&[]{}|<>/?"
  ];

  let selectorStr = "";
  for (let i = 0; i < 4; i++) { //already validated there are only 4 characters
    if (sets.charAt(i).toUpperCase() === 'Y') {
      selectorStr += charSets[i];
    }
  }

  let password = "";
  for (let i = 0; i < len; i++) {
    // get random number for index into charSet
    let index = Math.floor(Math.random(selectorStr.length) * selectorStr.length);
    password += selectorStr.charAt(index);
  }

  return password;
}

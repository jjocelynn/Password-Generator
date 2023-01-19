// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  let pwType = 0;
  let totalLength = 0;
  let numLowercase = 0;
  let numUppercase = 0;
  let numNumber = 0;
  let numSChar = 0;
  let letters= "abcdefghijklmnpqrstuvwxyz".split(""); 
  let numbers= "1234567890".split("");
  let special= "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~".splice("");

  //Asking for user input//
  //password length
  let lengthInput = prompt("Choose a password length");
  while ((lengthInput < 8 || lengthInput > 128) || (isNaN(lengthInput))) {
    lengthInput = prompt("*Must be a number between 8 and 128 characters");
  }
  console.log("The user chose a length of: " + lengthInput);

  // aksing to include character types and tallying them
  // lowercase letters
  let lowercase = confirm("would you like to include lowercase letters? (enter 'ok' for yes and 'cancel' for no)");
  console.log("The user wants lowercase: " + lowercase);
  if (lowercase) {
    pwType++;
  }

  // uppercase letters
  let uppercase = confirm("would you like to include uppercase letters? (enter 'ok' for yes and 'cancel' for no)");
  console.log("The user wants uppercase: " + uppercase);
  if (uppercase) {
    pwType++;
  }

  // numbers
  let number = confirm("would you like to include numbers? (enter 'ok' for yes and 'cancel' for no)");
  console.log("The user wants numbers: " + number);
  if (number) {
    pwType++
  }

  // special characters
  let sChar = confirm("would you like to include special characters? (enter 'ok' for yes and 'cancel' for no)");
  console.log("The user wants special characters: " + sChar);
  if (sChar) {
    pwType++
  }

  console.log("the user has chosen " + pwType + " different character types");

  //if the user choses none of them cancel and try again
  if (pwType == 0) {
    window.alert("Sorry, you need at least one character type. Please try again.");
    return;
  }


  //randomizing how many characters per chosen character type. max length = the user inputed length. min length= reserved for at least one of each chosen type (true)
  if (lowercase) {
    if (pwType == 1) {
      numLowercase = lengthInput;
    } else {
      numLowercase = Math.floor(Math.random() * (lengthInput - pwType) + 1);
      lengthInput = lengthInput - numLowercase;
      totalLength = totalLength + numLowercase;
    }
    pwType--;
    console.log(numLowercase + " lowercase, " + lengthInput + " characters left, " + pwType + " password types left, " + totalLength + " length so far");
  }
  if (uppercase) {
    if (pwType == 1) {
      numUppercase = lengthInput;
    } else {
      numUppercase = Math.floor(Math.random() * (lengthInput - pwType) + 1);
      lengthInput = lengthInput - numUppercase;
      totalLength = totalLength + numUppercase;
    }
    pwType--;
    console.log(numUppercase + " uppercase, " + lengthInput + " characters left, " + pwType + " password types left, " + totalLength + " length so far");
  }
  if (number) {
    if (pwType == 1) {
      numNumber = lengthInput;
    } else {
      numNumber = Math.floor(Math.random() * (lengthInput - pwType) + 1);
      lengthInput = lengthInput - numNumber;
      totalLength = totalLength + numNumber;
    }
    pwType--;
    console.log(numNumber + " numbers, " + lengthInput + " characters left, " + pwType + " password types left, " + totalLength + " length so far");
  }
  if (sChar) {
    if (pwType == 1) {
      numSChar = lengthInput;
    } else {
      numSChar = Math.floor(Math.random() * (lengthInput - pwType) + 1);
      lengthInput = lengthInput - numSChar;
      totalLength = totalLength + numSChar;
    }
    pwType--;
    console.log(numSChar + " special characters, " + lengthInput + " characters left, " + pwType + " password types left, " + totalLength + " length so far");
  }
  console.log("lowercase:"+ numLowercase + " uppercase:"+ numUppercase+ " numbers:" + numNumber + " special characters:" + numSChar);






  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



/*
1. output password that meets user criteria
2. criteria
  a. length (beetween 8 - 128)
  b. ask to include:
      lowercase
      uppercase
      numeric
      special characters
    input should be validated and have at least one of each chosen type
3. either displayed in an alert or written to the page
*/

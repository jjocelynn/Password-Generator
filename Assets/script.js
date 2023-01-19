// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", writePassword);
function writePassword() {

  //asking the user for a password length
  let lengthInput = prompt("Choose a password length");

  while (lengthInput < 8 || lengthInput > 128) {
    lengthInput = prompt("*Must be a number between 8 and 128 characters");
  }

  console.log("The user chose a length of: " + lengthInput);

  //asking the user if they would like lowercase letters
  let lowercase = confirm("would you like to include lowercase letters? (enter 'ok' for yes and 'cancel' for no)");
  console.log("The user wants lowercase: " + lowercase);

  let uppercase = confirm("would you like to include uppercase letters? (enter 'ok' for yes and 'cancel' for no)");
  console.log("The user wants uppercase: " + uppercase);

  let numbers = confirm("would you like to include numbers? (enter 'ok' for yes and 'cancel' for no)");
  console.log("The user wants numbers: " + numbers);

  let sChar = confirm("would you like to include special characters? (enter 'ok' for yes and 'cancel' for no)");
  console.log("The user wants special characters: " + sChar);


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button





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

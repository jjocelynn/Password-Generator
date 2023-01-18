// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  let pwType = 0;
  let totalLength = 0;
  let numLowercase = 0;
  let numUppercase = 0;
  let numNumber = 0;
  let numSpecial = 0;
  let lower = "abcdefghijklmnpqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "1234567890";
  let special = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  let orderedPw = ""


  ///// Asking for user input /////
  //password length
  let lengthInput = prompt("Choose a password length");
  while ((lengthInput < 8 || lengthInput > 128) || (isNaN(lengthInput))) {
    lengthInput = prompt("*Must be a number between 8 and 128 characters");
  }
  console.log("The user chose a length of: " + lengthInput);

  // asking whether to include character types
  // lowercase letters
  let lowercase = confirm("would you like to include lowercase letters? (enter 'ok' for yes and 'cancel' for no)");
  console.log("The user wants lowercase: " + lowercase);
  if (lowercase) {  //tallying which character types are used
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



  ///// function that will select random values based on if-statements below ///// 
  let ranChar = function (x, y) { //x is the number of charcters. y refers to the type of data.
    for (let i = 0; i < x; i++) {
      orderedPw += y.charAt(Math.floor(Math.random() * (y.length - 1)));
    }
  }

  //randomizing how many characters per "true" character type. 
  if (lowercase) {
    if (pwType == 1) { //if user has only chosen 1 data type
      numLowercase = lengthInput;
    } else {
      numLowercase = Math.floor(Math.random() * (lengthInput - pwType) + 1); //max length = user inputed length - pwType (reserves at least 1 of each type)
      lengthInput = lengthInput - numLowercase; //for the console
      totalLength = totalLength + numLowercase; //for the console
    }
    ranChar(numLowercase, lower); //^ function above (random number of lowercase letters and choosing from the list) 
    pwType--; //minus one character type since the lowercase letters have been accounted for
    console.log(numLowercase + " lowercase, " + lengthInput + " characters left, " + pwType + " password types left, " + totalLength + " length so far"); //for the console
  }

  if (uppercase) {
    if (pwType == 1) {
      numUppercase = lengthInput;
    } else {
      numUppercase = Math.floor(Math.random() * (lengthInput - pwType) + 1);
      lengthInput = lengthInput - numUppercase;
      totalLength = totalLength + numUppercase;
    }
    ranChar(numUppercase, upper);
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
    ranChar(numNumber, numbers);
    pwType--;
    console.log(numNumber + " numbers, " + lengthInput + " characters left, " + pwType + " password types left, " + totalLength + " length so far");
  }

  if (sChar) {
    if (pwType == 1) {
      numSpecial = lengthInput;
    } else {
      numSpecial = Math.floor(Math.random() * (lengthInput - pwType) + 1);
      lengthInput = lengthInput - numSpecial;
      totalLength = totalLength + numSpecial;
    }
    ranChar(numSpecial, special);
    pwType--;
    console.log(numSpecial + " special characters, " + lengthInput + " characters left, " + pwType + " password types left, " + totalLength + " length so far");
  }

  console.log("lowercase:" + numLowercase + " uppercase:" + numUppercase + " numbers:" + numNumber + " special characters:" + numSpecial); //for the console
  console.log(orderedPw); //checking if the function on line 66 worked




  ///// shuffling the ordered password /////
  let shufflePw = orderedPw.split("");  //turning the ordered password into an array
  let a, b, c //initializing variables to let us swap indexes
  for (a = 0; a < shufflePw.length; a++) { //going through each index of the orderedPw array
    b = Math.floor(Math.random() * (shufflePw.length - 1)); //giving b a random value within the arrays index
    c = shufflePw[a]; //storing the a-th index value of the shufflePw into c
    shufflePw[a] = shufflePw[b]; // replacing the a-th value with b-th value
    shufflePw[b] = c; //putting the c value (old a) into b and repeating until we go through the whole array
  }
  let password = shufflePw.join(""); // joining the array into a string and setting it to password


  document.querySelector("#password").value = password; //displaying it on the screen
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

// tutor example
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
*/
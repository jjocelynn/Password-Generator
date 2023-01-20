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






  let lower = "abcdefghijklmnpqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "1234567890";
  let special = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  let orderedPw = ""

  //function that will select random values from 
  let ranChar = function (x, y) { //x is the number of charcters that data type needs. y refers to the type of data. z is the collection
    for (let i = 0; i < x; i++) {
      orderedPw += y.charAt(Math.floor(Math.random() * (y.length + 1)));
    }
  }

  //randomizing how many characters per chosen character type. max length = the user inputed length. min length= reserved for at least one of each chosen type (true)
  if (lowercase) {
    if (pwType == 1) {
      numLowercase = lengthInput;
    } else {
      numLowercase = Math.floor(Math.random() * (lengthInput - pwType) + 1);
      lengthInput = lengthInput - numLowercase; //can be commented out later
      totalLength = totalLength + numLowercase; //can be commented out later
    }
    ranChar(numLowercase, lower);
    pwType--;
    console.log(numLowercase + " lowercase, " + lengthInput + " characters left, " + pwType + " password types left, " + totalLength + " length so far"); //can be commented out later
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
  console.log("lowercase:" + numLowercase + " uppercase:" + numUppercase + " numbers:" + numNumber + " special characters:" + numSpecial);

  // numLowercase = 3. we need three special characters
  // x = numLowercase
  // x = 3.
  // y = lower (abc)
  // z = characters for the password



  console.log(orderedPw);
  //now i have to shuffle the numbers


  //shuffling the ordered password

  orderedPw= orderedPw.split("");  //turning the ordered password into an array
  let a,b,c //initializing variables to let us swap indexes
  console.log(orderedPw);
  for (a = 0; a <= orderedPw.length; a++) { //going through each index of the orderedPw array
    b = Math.floor(Math.random() * a); //giving b a random value 
    c = orderedPw[a]; //storing the a-th index value of the orderedPw into c
    orderedPw[a] = orderedPw[b]; // replacing the a-th value with b-th value
    orderedPw[b] = c; //putting the c value (old a) into b and repeating until we go through the whole array
  }

  let password = orderedPw.join("");
  console.log(password);
  document.querySelector("#password").value = password;

}

/*
if(isLowercase){
  pwChar += lowercase.charAt(Math.floor(Math.random() * n));
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

/*
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
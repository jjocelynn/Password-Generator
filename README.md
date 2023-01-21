# Password Generator

## Description

This project is a random password generator that is capable of receiving user input and producing a string of characters based on the user criteria. The intention is to generate a secure password that allows the user to feel confident when protecting sensitive data. This is done through Javascript with the help of methods, functions, loops and math logic.

## Deployed Application Link:

https://jjocelynn.github.io/password-generator/

## Usage

When the user clicks the "Generate Password" button, a function runs that will ask the user various prompts. Depending on the user's answer, an if statement will generate a random set of characters in a random order and display it on the screen.

screen upon loading:
![screen with a red "Generate Password" button](./Assets/images/screen-upon-load.jpg)

prompt asking the user to choose a length for their password:
!["choose a password length" prompt](./Assets/images/password-length-prompt.jpg)

If the user enters a number lower than 8, higher than 128, or a letter, the prompt will require them to choose again.
!["*Must choose a length between 8 and 128" prompt](./Assets/images/password-length-requirements.jpg)

asking if the user would like to include lowercase letters:
![lowercase letter prompt](./Assets/images/lowercase-letters-prompt.jpg)

asking if the user would like to include uppercase letters:
![uppercase letter prompt](./Assets/images/uppercase-letters-prompt.jpg)

asking if the user would like to include numbers:
![numbers prompt](./Assets/images/number-prompt.jpg)

asking if the user would like to include special characters:
![special characters prompt](./Assets/images/special-character-prompt.jpg)

if the user chooses no character types, the function will end and ask them to try again
![asking the user to try again](./Assets/images/no-character-types.jpg)

Depending on the length and character type(s) the user has requested, the program will display a string of characters that meet the requirement.
![screen with a random password displayed](./Assets/images/generated-password.jpg)

## Credits

kodeclik (shuffle letters in a word): https://www.kodeclik.com/how-to-scramble-a-word-in-javascript/

## License

Please refer to the LICENSE in the repo

var specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var generatePassword = function() {
  var passwordLength = window.prompt("How many characters long (between 8 and 128) do you want your password to be?");
  while (isNaN(parseInt(passwordLength)) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Invalid response. Try again!")
  };

  var passwordLowercase = window.confirm("Do you want to include lowercase letters?");
  var passwordUppercase = window.confirm("Do you want to include uppercase letters?");
  var passwordNumeric = window.confirm("Do you want to include numbers?");
  var passwordSpecial = window.confirm("Do you want to include special characters?");

  while (!passwordLowercase && !passwordUppercase && !passwordNumeric && !passwordSpecial) {
    window.alert("Please confirm at least one of the following options.")
    // prompt the user again because they gave us all false
    passwordLowercase = window.confirm("Do you want to include lowercase letters?");
    passwordUppercase = window.confirm("Do you want to include uppercase letters?");
    passwordNumeric = window.confirm("Do you want to include numbers?");
    passwordSpecial = window.confirm("Do you want to include special characters?");
  }

  var password = "";
  var characterPool = [];
  if (passwordLowercase) {
    characterPool= characterPool.concat(lowercase);
  }
  if (passwordUppercase) {
    characterPool = characterPool.concat(uppercase);
  }
  if (passwordNumeric) {
    characterPool = characterPool.concat(numbers);
  }
  if (passwordSpecial) {
    characterPool = characterPool.concat(specialChars);
  }

  for (var i = 0; i < parseInt(passwordLength); i ++) {
    var index = randomNumber(0, characterPool.length - 1);
    var character = characterPool[index];
    password += character;
  }
  return password;
};


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
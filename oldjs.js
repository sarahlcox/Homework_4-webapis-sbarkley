// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create arrays for user choice
var symbol = ["!","?","@","#","$","%","&","+","-",".",":","=","^","~"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];

// User Prompt variables
var symbolGen;
var upperGen;
var lowerGen;
var numericGen;
var userLength;
var userschoice=[];
var finalpw;

// Function to generate password, user selects how long they would like password to be and convert string value to number using "parseInt"
function generatePassword(){
  var userLength = number.parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  console.log(parseInt(userLength));

  // First if statement for user validation 
if (userLength <= 8 || userLength >= 128) {
    alert("You must choose between 8 and 128");
    var userLength = (prompt("How long would you like your password to be? Choose 8-128 characters."));
}

// ask user questions
var symbolGen = confirm ("Do you want your password to contain special characters?");
var lowerGen = confirm ("Do you want your password to contain lowercase letters?");
var upperGen = confirm ("Do you want your password to contain uppercase letters?");
var numericGen = confirm ("Do you want your password to contain numbers?");
};

 // If user doesnt choose one selection need to alert to pick at least one
 while(symbolGen === false && upperGen === false && lowerGen === false && numericGen === false) {
  alert("You must make at least one selection.");
  var symbolGen = confirm("Click OK to confirm if you would like to include special characters");
  var lowerGen = confirm("Click OK to confirm if you would like to include lowercase characters");
  var upperGen = confirm("Click OK to confirm if you would like to include uppercase characters");
  var numericGen = confirm("Click OK to confirm if you would like to include numeric characters");
} 
  //if symbolGen is true, what do we do?
    //store it in userschoice.
     //decide how the possible data is stored (userschoice: [],{}=>
      // [] b/c we have a .length to determine how much is in the userschoice bc it will vary)

//     for(var i=0;i<userLength;i++){
//     var index=(Math.floor(Math.random() * ((userschoice.length-1) - 0) + 0);
//generate return function and it returns a password
    // Empty string to be filled based on for loop selecting random characters from the array
    //after all the series of questions are answered, what do we do?
    //generate a random password using userschoice (need to know how to call random, forloops)
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //Math.floor(Math.random() * (max - min) + min);
    //based on user length (parseInt) get random vals from the userschoice
    //return the final password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//     console.log(userschoice[index]);
//     finalpw+=userschoice[index];
//     //finalpw=finalpw+userschoice[index]
//     }

//   return finalpw;
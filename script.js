// buttons
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy")
//range bar & number box
var charRange = document.querySelector("#charRange");
var charNumber = document.querySelector("#charNumber");
//check boxes
var caps = document.querySelector("#caps");
var lows = document.querySelector("#lows")
var numbers = document.querySelector("#numbers");
var symbs = document.querySelector("#symbols");
//password area
var passwordText = document.querySelector("#password");


//created variables using character codes and function minMax
var upperCodes = minMax(65,90);
var lowerCodes = minMax(97,122);
var numbCodes = minMax(48,57);
var symbsCodes = minMax(33, 47).concat(minMax(58, 64)).concat(minMax(91, 96)).concat(minMax(123, 126));
//none for default
var none = []

//syncs the value of the slider and range number together
charNumber.addEventListener("input", syncCharacterAmount);
charRange.addEventListener("input", syncCharacterAmount);

//writePassword sets the character amount value and sets var for upper, numbers, and symbols = to checked
//sets password = generatePassword function and passes the new variables
//prints out the randomly generated password as text
function writePassword(){
  var charAmount = charNumber.value;
  var upper = caps.checked;
  var lowes = lows.checked;
  var numbies = numbers.checked;
  var symbols = symbs.checked;
  var password = generatePassword(charAmount, upper, lowes, numbies, symbols);

  passwordText.innerText = password;
  

}

//generatePassword function declares var charValue = to an empty array
//concatonates the charValue if boxes are checked for character types
//if nothing is selected an alert is triggered
//create empty array to pass the final password once generated
//a for loop to create the password where index cycles from 0 adding a new random selection from charValue until it reaches the charAmount
//push adds the new code into the empty array
//return the passwordFinal array as a string instead of charCodes with .join
function generatePassword(charAmount, upper, lowes, numbies, symbols) {
    
    var charValue = none
    if(upper) charValue = charValue.concat(upperCodes)
    if(lowes) charValue = charValue.concat(lowerCodes)
    if(numbies) charValue = charValue.concat(numbCodes)
    if(symbols) charValue = charValue.concat(symbsCodes)
    if(charValue === none){
      alert("PLEASE SELECT A PARAMETER")
    }
    var passwordFinal = []
    
    for(var i = 0; i < charAmount; i++) {
      var codes = charValue[Math.floor(Math.random() * charValue.length)]
      passwordFinal.push(String.fromCharCode(codes))
    }
    return passwordFinal.join("");
  }


//The maxMin function is used to loop through the character codes declared above
//index begins at the lowest number of the array and cycles through each by 1 until its reaches the end of the array
//This function goes into the code variables and includes every char code between the vlaues
//return value of the loop array
function minMax(min, max){
  var loop = []
  for(var i = min; i <= max; i++){
    loop.push(i)
  }
  return loop;
}


//selects the generated password and copies it
function copyFunction(){
  password.select()
  document.execCommand("Copy")
}

//this function selects the range and number and makes them equal in value
function syncCharacterAmount(event) {
  var value = event.target.value
  charNumber.value = value
  charRange.value = value
}
// event listeners that trigger different functions when a button is clicked
generateBtn.addEventListener("click", writePassword);

copyBtn.addEventListener("click", copyFunction)


 

// grabbed selectors and buttons from html and added them to the java via querySelector
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy")
var charRange = document.querySelector("#charRange");
var charNumber = document.querySelector("#charNumber");
var caps = document.querySelector("#caps");
var lows = document.querySelector("#lows")
var numbers = document.querySelector("#numbers");
var symbs = document.querySelector("#symbols");
var passwordText = document.querySelector("#password");


//created variables using character codes and function minMax
var upperCodes = minMax(65,90);
var lowerCodes = minMax(97,122);
var numbCodes = minMax(48,57);
var symbsCodes = minMax(33, 47).concat(minMax(58, 64)).concat(minMax(91, 96)).concat(minMax(123, 126));
var none = []

//syncs the value of the slider and range number together
charNumber.addEventListener("input", syncCharacterAmount);
charRange.addEventListener("input", syncCharacterAmount);

//writePassword checks character amount value and if the boxes for upper, numbers, and symbols are checked.
//Also calls the generate password function passing the new variables through
//prints out the randomly generated password
function writePassword(){
  var charAmount = charNumber.value;
  var upper = caps.checked;
  var lowes = lows.checked;
  var numbies = numbers.checked;
  var symbols = symbs.checked;
  var password = generatePassword(charAmount, upper, lowes, numbies, symbols);

  passwordText.innerText = password;
  

}

//generatePassword function declares var charCode = lowerCodes making the default lowercase
//concatonates the charCode if boxes are checked
//a for loop with index = 0 and less than charAmount and adds 1 each time
//Math randomly cycles through which type is selected
//push adds the new code into the empty array
//return the passwordFinal array as a string
//if nothing is selected an alert is triggered
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
//index begins at the lowest number and cycles through by 1 until its reached the max
//return value of the loop into the array
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


 

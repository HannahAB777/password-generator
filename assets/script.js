// when button is clicked a password in generated

const generateBtn = document.getElementById("#generate");
const passwordrange = document.getElementById("#length");
const uppercaseInput = document.getElementById("#uppercase");
const lowercaseInput = document.getElementById("#lowercase");
const numberInput = document.getElementById ("#numbers");
const symbolInput = document.getElementById ("#symbols");

const generateBtn = document.getElementById("#generate");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(?";

// Add event listener to generate button
generateBtn.addEventListener("click",function (event){


    const passwordlength = Number(passwordrange.value);
    const hasUppercase = uppercaseInput.checked;
    const hasLowercase = lowercaseInput.checked;
    const hasNumber = numberInput.checked;
    const hasSymbol = symbolInput.checked;

    //if no boxes are checked
    const noChoiceMade = !hasUppercase && !hasLowercase && !hasNumber && !hasSymbol;

    if(noChoiceMade){
        //const user know they must selected atleast one box
        alert("Please check at least one box.");
        return;
    }

    let characterset = "";

    if(hasUppercase){
        characterset = characterset + uppercase;
    }
    if(hasLowercase){
        characterset = characterset + lowercase;
    }
    if(hasNumber){
        characterset = characterset + number;
    }
    if(hasSymbol){
        characterset = characterset + symbol;
    }

    console.log(characterset);

    for (let index = 0; index < passwordlength; index++) {
        const element = array[index];
        
    }
});



//when boxes are checked
// a password between 8-128characters
//if user enters numbers outside of this an error is logged
//must include numbers
//must include uppercase
//lowercase
//symbols
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




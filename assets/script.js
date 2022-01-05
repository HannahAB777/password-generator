//confirm number of characters
var numberOfCharacters = window.prompt('how many characters would you like to add', 'type a number between 8-128');
    //if not a number or outside of 8-128 return an error message
    if (isNaN(numberOfCharacters)){
        alert('invalid selection, please enter a number');
        window.prompt('how many characters would you like to add', 'type a number between 8-128');
       
    } if (numberOfCharacters < 8){
        alert('invalid please enter a number between 8-128');
        window.prompt('how many characters would you like to add', 'type a number between 8-128');
    }
     if (numberOfCharacters > 128){
    alert('invalid please enter a number between 8-128');
    window.prompt('how many characters would you like to add', 'type a number between 8-128');
    }
var addNumbers = window.confirm('would you like to add numbers?'); //to add numbers
var addUppercase = window.confirm('would you like to add uppercase letters?'); //to add uppercase
var addLowercase = window.confirm('would you like to add lowercase latters?'); //to add lowercase
var addsymbols = window.confirm('would you like to add symbols?'); //to add symbols
    //if no character types are selected return error and start code again
    if (!addNumbers&&!addUppercase&&!addLowercase&&!addsymbols) {
        alert('error, please select at least one character type.');
    }
    //targeting the text box for the password output
    var randomPassword = document.getElementById('passwordoutput');

    //length of password
    var passwordLength = Number(numberOfCharacters);
    //create functions for each type of character
    //numbers
    function getRandomNumber() {
        return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    //lowercase
    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    //symbols
    function getRandomSymbol() {
        const symbols = '!@#$%^&*(){}[]=<>/,.';
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    //passwordoutput from choice of characters
    var characterset = "";
    if (!!addNumbers) {
        characterset = characterset + getRandomNumber();
    }
    if (!!addUppercase) {
        characterset = characterset + getRandomUpper();
    }
    if (!!addLowercase) {
        characterset = characterset + getRandomLower();
    }
    if (!!addsymbols) {
        characterset = characterset + getRandomSymbol();
    }

    //loop for character
    var password = '';
    for (let index = 0; index < passwordLength; index++) {
        var randomCharacter = characterset[Math.floor(Math.random() * characterset.length)];
        password = password + randomCharacter;
    }

    console.log(password);

//create var for gernerate password button
var passwordBttn = document.getElementById('generate');

//clickon eventlistener
passwordBttn.addEventListener("click", function(){
    document.getElementById('passwordoutput').textContent = password;
    
});





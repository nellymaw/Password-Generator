const pwElement = document.getElementById('pw');
const lenBoxElement = document.getElementById('lenBox');
const uppercaseElement = document.getElementById('uppercaseBox');
const lowercaseElement = document.getElementById('lowercaseBox');
const numberElement = document.getElementById('numberBox');
const symbolsElement = document.getElementById('symbolsBox')
const generateBtnElement = document.getElementById('generateBtn')
const copyElement = document.getElementById('copy')

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!£$%^&*()_+=-#@?><";
/**
 * Repeats generateChar function, creating a single random
 * character, for the same amount of times as the password length value
 */
function generatePassword(){
    let len = lenBoxElement.value;

    let password = '';

    if(numberElement.checked) {
        password += getNumber();
    }
    if(lowercaseElement.checked) {
        password += getLowercase();
    }
    if(symbolsElement.checked) {
        password += getSymbols();
    }
    if(uppercaseElement.checked) {
        password += getUppercase();
    }

    for (let i = password.length; i<len; i++) {
        const char = generateChar();
        password += char;
    }
    pwElement.innerText = password;
}
/**
 * returns random character from uppercase string.
 */
function getUppercase() {
    return uppercase[Math.floor(Math.random()*uppercase.length)]
}
/**
 * returns random character from lowercase string.
 */
function getLowercase() {
    return lowercase[Math.floor(Math.random()*lowercase.length)]
}
/**
 * returns random character from numbers string.
 */
function getNumber() {
    return numbers[Math.floor(Math.random()*numbers.length)]
}
/**
 * returns random character from symbols string.
 */
function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)]
}

/**
 * Checks which of the criteria boxes are checked, put them inside an array
 * and returns an random value, unless no criteria is checked, if so, returns empty.
 */

function generateChar() {
    let chars = [];
    if(symbolsElement.checked){
        chars.push(getSymbols())
    }
    if(numberElement.checked){
        chars.push(getNumber())
    }
    if(lowercaseElement.checked){
        chars.push(getLowercase())
    }
    if(uppercaseElement.checked){
        chars.push(getUppercase())
    }
    if (chars.length === 0) {
        return ""
    }
    return chars[Math.floor(Math.random()*chars.length)]
}
//Event Listener for when the Generate button is clicked.
generateBtnElement.addEventListener('click', generatePassword);


//event listener for when the password box is clicked and the text
//inside is copied to the user's clipboard.
copyElement.addEventListener('click',copyClipboard);
pwElement.addEventListener('click',copyClipboard);


/**
 * Function to copy the password to the clipboard.
 */
function copyClipboard() {
    var copyText = document.getElementById('pw');
    navigator.clipboard.writeText(copyText.innerText);
}
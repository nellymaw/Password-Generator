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

function getUppercase() {
    return uppercase[Math.floor(Math.random()*uppercase.length)]
}

function getLowercase() {
    return lowercase[Math.floor(Math.random()*lowercase.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random()*numbers.length)]
}

function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)]
}

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
    return chars[Math.floor(Math.random()*chars.length)]
}

generateBtnElement.addEventListener('click', generatePassword);

copyElement.addEventListener('click',copyClipboard);
pwElement.addEventListener('click',copyClipboard);

function copyClipboard() {
    var copyText = document.getElementById('pw');

    navigator.clipboard.writeText(copyText.innerText);
}
/*jshint esversion: 6 */

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!£$%^&*()_+=-#@?><";

/**
 * Eventlisteners available after html loaded
 */
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById('generateBtn').addEventListener('click', generatePassword);
    document.getElementById('copy').addEventListener('click', copyClipboard);
    document.getElementById('pw').addEventListener('click', copyClipboard);
});

/**
 * Repeats generateChar function, creating a single random
 * character, for the same amount of times as the password length value
 * Returns random character * desired password length
 */
function generatePassword() {
    let len = document.getElementById('lenBox').value;

    let password = '';

    if (document.getElementById('numberBox').checked) {
        password += getNumber();
    }
    if (document.getElementById('lowercaseBox').checked) {
        password += getLowercase();
    }
    if (document.getElementById('symbolsBox').checked) {
        password += getSymbols();
    }
    if (document.getElementById('uppercaseBox').checked) {
        password += getUppercase();
    }

    for (let i = password.length; i < len; i++) {
        let char = generateChar();
        password += char;
    }
    document.getElementById('pw').innerText = password;
}
/**
 * returns random character from uppercase string.
 */
function getUppercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}
/**
 * returns random character from lowercase string.
 */
function getLowercase() {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}
/**
 * returns random character from numbers string.
 */
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
/**
 * returns random character from symbols string.
 */
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

/**
 * Checks which of the criteria boxes are checked, put them inside an array
 * and returns an random value, unless no criteria is checked, if so, returns empty.
 */

function generateChar() {
    let chars = [];
    if (document.getElementById('symbolsBox').checked) {
        chars.push(getSymbols());
    }
    if (document.getElementById('numberBox').checked) {
        chars.push(getNumber());
    }
    if (document.getElementById('lowercaseBox').checked) {
        chars.push(getLowercase());
    }
    if (document.getElementById('uppercaseBox').checked) {
        chars.push(getUppercase());
    }
    if (chars.length === 0) {
        return "";
    }
    return chars[Math.floor(Math.random() * chars.length)];
}

/**
 * Function to copy the password to the clipboard.
 */

function copyClipboard() {
    navigator.clipboard.writeText(document.getElementById('pw').innerText);
    document.getElementById('copy').innerText ='Copied';
    setTimeout(() =>{document.getElementById('copy').innerText = 'Copy';}, 1000);
}
const lettersAndSymbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '&', '*', '(', ')', '-', '_', '+', '=', '/', '[', ']', '{', '}', ';', ':', '<', '>', ',', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','#'];
const lettersAndSymbols2 =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','#','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '&', '*','H','H']

function getRandomChar() {
    return (lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)])
};
function getRandomChar2() {
    return (lettersAndSymbols2[Math.floor(Math.random() * lettersAndSymbols2.length)])
};


const myRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { myRandomNumber, getRandomChar,getRandomChar2 }
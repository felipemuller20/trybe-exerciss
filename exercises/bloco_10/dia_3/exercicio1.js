const generateRandom = () => Math.floor(Math.random()*101);

const number = generateRandom();
console.log(number);

module.exports = {generateRandom};
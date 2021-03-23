const skills = ['Lideranca', 'Observador', 'Resiliente', 'Jacascript', 'Html'];


const changeX = string => `Tryber ${string} aqui!`;

const tryber = changeX('Felipe');

const newFunction = string => `${string} Minhas cinco principais habilidades são:
${skills.sort()}
#GOTRYBEEEEEEEEEEEEEEEEEEEEEEEEEE`;

console.log(newFunction(changeX('Felipe')));


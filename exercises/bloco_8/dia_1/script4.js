const grade = (rightAnswer, studentAnswer, check) => {
  const finalGrade = check(rightAnswer, studentAnswer);
  return finalGrade;
}

const checkResults = (rightAnswer, studentAnswer) => {
  let counter = 0;
  for (let index = 0; index < rightAnswer.length; index += 1) {
    if (studentAnswer[index] === rightAnswer[index]) {
      counter += 1;
    } else if (studentAnswer[index] !== 'N.A') {
      counter -= 0.5;
    }
  }
  return counter;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; //total 5

console.log(grade(rightAnswers, studentAnswers, checkResults));

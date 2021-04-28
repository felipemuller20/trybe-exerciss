function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index += 1) {
  let dias = document.createElement('li');
  dias.innerHTML = dezDaysList[index];
  dias.className = 'day';
  document.querySelector('#days').appendChild(dias);
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    dias.className += ' holiday';
  }
  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
  dias.className += ' friday';
  }
}

// exercicio 2
function createBtn(text) {
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday';
  let buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(newButton);
  newButton.innerText = text;
}
createBtn('Feriados');

// exercicio 3
function paintHolidays() {

let btnHoliday = document.querySelector('#btn-holiday');

btnHoliday.addEventListener('click', function() {
  let feriados = document.querySelectorAll('.holiday');

  for (let index = 0; index < feriados.length; index += 1) {
    if (feriados[index].style.backgroundColor === 'white') {
      feriados[index].style.backgroundColor = 'rgb(238,238,238)'
    } else {
        feriados[index].style.backgroundColor = 'white';
    }
  }
})
}
paintHolidays();

// exercicio 4

function fridayButton(texto) {
  let fridayBtn = document.createElement('button');
  fridayBtn.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(fridayBtn);
  fridayBtn.innerText = texto;
}
fridayButton('Sexta-feira');

// exercicio 5

function fridayBtn() {


let fridayB = document.getElementById('btn-friday');

fridayB.addEventListener('click', function() {
  let fridays = document.querySelectorAll('.friday');
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText === 'Sexta-CHEIRA') {
      fridays[index].innerText = (fridays[index].nextElementSibling.innerText) - 1;
    } else {
    fridays[index].innerText = 'Sexta-CHEIRA';
    }
  }
});

}
fridayBtn();

// exercicio 6 - primeira opção também funciona, mas mais complexa


// let monthDays = document.querySelector('#days');
// function zoomDay() {
//   for (let index = 0; index < monthDays.children.length; index += 1) {
//     monthDays.children[index].addEventListener('mouseover', function() {     
//       monthDays.children[index].style.fontSize = '100px';
//     })
//   }
// }

function zoomDay() {
  let monthDays = document.querySelector('#days');
  monthDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';

  })
}


function zoomDayOut() {
  let monthDays = document.querySelector('#days');
  monthDays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
   
  })
}
zoomDay();
zoomDayOut();

// exercicio 7

function newTask(string) {
  let newTask = document.createElement('span');
  document.querySelector('.my-tasks').appendChild(newTask);
  newTask.innerText = string;
}

newTask('Estudar');

// exercicio 8

function paintDiv(color) {
  let newDiv = document.createElement('div');
  newDiv.className = 'task';
  newDiv.style.backgroundColor = color;
  let myTasks = document.querySelector('.my-tasks')
  myTasks.appendChild(newDiv);
}
paintDiv('red');

// exercicio 9
function selectTask() {
  let selectTask = document.querySelector('.task');
  selectTask.addEventListener('click', function() {
    if (selectTask.className === 'task') {
    selectTask.className = 'task selected';
    } else {
      selectTask.className = 'task';
    }
  })
}
selectTask();

// exercicio 10
function dayColor() {
  let monthDays = document.querySelector('#days');
  monthDays.addEventListener('click', function(event) {
    if (document.querySelector('.selected') != null) {
      let color = document.querySelector('.selected').style.backgroundColor;
      if (event.target.style.color != color) {
        event.target.style.color = color;
      } else {
        event.target.style.color = 'rgb(119,119,119)';
      }
    }
  })
}
dayColor();

// function setDayColor() {
//   let selectedTask = document.getElementsByClassName('task selected');
//   let days = document.querySelector('#days');
//   let taskDiv = document.querySelector('.task');
//   let taskColor = taskDiv.style.backgroundColor;
  
//   days.addEventListener('click', function(event){
//     let eventTargetColor = event.target.style.color;
//     if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
//       let color = selectedTask[0].style.backgroundColor;
//       event.target.style.color = color;
//     } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
//       event.target.style.color = 'rgb(119,119,119)';
//     }
//   });
// };

// setDayColor();
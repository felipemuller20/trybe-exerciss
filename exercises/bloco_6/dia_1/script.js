function createState() {
  
  const statesArray = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
  for (let index = 0; index < statesArray.length; index += 1) {
    const states = document.getElementById('states');
    let newOption = document.createElement('option');
    newOption.innerText = statesArray[index];
    newOption.value = statesArray[index];
    states.appendChild(newOption);
  }
}
createState();
const createNew = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { Nome: fullName, email: `${email}@trybe.com`};
}

const newEmpolyees = (employee) => {
  const employees = {
    id1: employee('Pedro Guerra'),
    id2: employee('Luiza Drumond'),
    id3: employee('Carla Paiva'),
  };
  return employees;
}

console.log(newEmpolyees(createNew));

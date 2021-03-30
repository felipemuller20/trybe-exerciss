const createNew = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { Nome: fullName, email: `${email}@trybe.com`};
}

const newEmpolyees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'),
    id2: action('Luiza Drumond'),
    id3: action('Carla Paiva'),
  };
  return employees;
}

console.log(newEmpolyees(createNew));

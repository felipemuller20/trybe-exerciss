// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const sayAJoke = (jokeApi) => {
  const joke = document.getElementById('jokeContainer');
  joke.innerText = jokeApi;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => sayAJoke(data.joke));
};



window.onload = () => fetchJoke();
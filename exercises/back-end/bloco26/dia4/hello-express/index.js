const express = require('express');

const app = express(); // 1 Criar uma nova aplicação Express;

app.get('/hello', handleHelloWorldRequest); // 2 quando uma GET for recebida no caminho /hello ,
 //                                           chama a função handleHelloWorldRequest

app.listen(3001, () => { // crie um servidor HTTP e escute por requisições na porta 3001
  console.log('Aplicação ouvindo na porta 3001'); 
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4 Ao tratar uma requisição com método GET no caminho /hello , 
  //                                      enviar o status HTTP 200 (OK) e a mensagem "Hello world!".
}

// node index.js -> acessar a pagina http://localhost:3001/hello
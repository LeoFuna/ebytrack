const express = require('express');
const { getAllUsers, getUserById, createUser, loginUser } = require('./controllers/usersController');

const app = express();

const PORT = 3001;

app.use(express.json());
// https://enable-cors.org/server_expressjs.html
// Usado para permitir o acesso do meu localhost onde está o front end, antes o mesmo fazio o bloqueio atrapalhando a request
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, () => console.log(`Estou ouvindo a porta ${PORT}`));

app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);

app.post('/users', createUser);
app.post('/login', loginUser);

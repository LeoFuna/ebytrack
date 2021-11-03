const express = require('express');
const { getAllUsers, getUserById, createUser } = require('./controllers/usersController');

const app = express();

const PORT = 3001;

app.use(express.json());

app.listen(PORT, () => console.log(`Estou ouvindo a porta ${PORT}`));

app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);

app.post('/users', createUser);

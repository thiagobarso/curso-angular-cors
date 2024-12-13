const express = require('express');

const server = express();

//fazer o parse do json que vem para a nossa api de json para objeto javascript
server.use(express.json());

const users = [
    {
        id: 0,
        name: 'Thiago',
        age: 25
    },
]

server.put('/users/:id', (req, res) => {
    const id = +req.params.id;
    const newUser = req.body;

    const user = users.find(u => u.id === id);

    if (user) {
        user[id] = newUser;
        res.status(200).send(users[id]);
    } else {
        res.status(404).send({ message: 'Usuário não encontrado' });
    }

});

//escutar as requisições ao servidor na porta 5000
server.listen(5000);
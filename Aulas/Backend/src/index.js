//Variavel para utilizar o express
const express = require('express');
//Rota importada de src/routes.js, quando for pacote coloca so o nome ja se for arquivo coloca ./
const routes = require('./routes')
//Atribuir o Express para uma variavel do app
const app = express();
//Cors
const cors = require('cors');

//Atribuir porta para o Express
app.listen(3333);
//Faz o Express/Node entender o JSON
app.use(express.json());
//Faz com que as rotas sejam utilizadas
app.use(routes);
//Utiliza o cors, faz com que o front utilize o back?
app.use(cors);
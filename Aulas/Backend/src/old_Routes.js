const express = require('express');

const routes = express.Router();

//module.exports = routes;

/* 
    Tipos de parametros:

    Query Params:Parametro enviados na rota apos o simbolo '?' (Filtros, Paginação(Paginacao seria tipo pagina 1, pagina 2 etc)). Para simplificar, seria o nome do parametro a ser utilizado, tipo nome=, pagina= que fica na URL
    Query Param posso colocar outros parametros alem do especificado
    POSTMAN: http://localhost:3333/users?name=Gustavo
    ROUTE: /users/

    Route Params: Parametros utilizados para identificar recursos. Basicamente o valor que vai na Query Param
    No route params posso colocar apenas o que a rota permite  
    POSTMAN: http://localhost:3333/users/1 
    ROUTE: /users/:id

    Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos. Utiliza POST e creio eu o PUT
*/
/*
//Query Param
routes.get('/users', (request, response) => {
    //Acessar os parametros que vem dos query
    let params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana Oministack 11.0',
        aluno: 'Gustavo Brito'
    });
});
*/
/*
//Route Param
routes.get('/users/:id', (request, response) => {
    //Acessar os parametros que vem dos query
    let params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana Oministack 11.0',
        aluno: 'Gustavo Brito'
    });
});

//Request Body Param
routes.post('/users', (request, response) => {
    //Acessar os parametros que vem dos query
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Oministack 11.0',
        aluno: 'Gustavo Brito'
    });
});
*/
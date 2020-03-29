//Importa a lib do express
const express = require('express');

//Variavel do Express Router
const routes = express.Router();

//Importar controller da Ong
const ongController = require('./controllers/ongController');
//Importar controller dos Casos/Incident
const incidentController = require('./controllers/incidentController');
//Importar controller do ?Profile?
const profileController = require('./controllers/profileController');
//Importar controller de Sessão/Login
const sessionController = require('./controllers/sessionController');

//Exporta a variavel de rotas
module.exports = routes;

//   ---  Rotas  ---   //
//routeVar.Req('/route', oQueARotaFaz.Metodo);

//   Ongs   //

//Query Param - Listar Ongs
routes.get('/ongs', ongController.index);

//Request Body Param - Cadastrar Ongs
routes.post('/ongs', ongController.create);

//Route Param - Deleta Ong
routes.delete('/ongs/:id', ongController.delete);

//   Incidentes/Casos   //

//Query Param - Listar Caso/Incident
routes.get('/incidents', incidentController.index);

//Request Body Param - Cadastrar Caso/Incident
routes.post('/incidents', incidentController.create);

//Route Param - Deleta Caso/Incident
routes.delete('/incidents/:id', incidentController.delete);

//   Profile   //

//Query Param - Listar ?usuarios?
routes.get('/profile', profileController.index);

//   Session/Login   //

//
routes.post('/sessions', sessionController.create);









/* //Como foi feito primeiro
//Listar Ongs
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    console.log(ongs);

    return response.json(ongs);
})
*/

/* //Como foi feito primeiro
//Request Body Param - Cadastrar Ongs
routes.post('/ongs', async (request, response) => {
    
});
*/
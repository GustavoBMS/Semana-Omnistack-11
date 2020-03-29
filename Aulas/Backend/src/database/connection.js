//Conectar com o knex
const knex = require('knex');
//Configuracoes do Knex
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;
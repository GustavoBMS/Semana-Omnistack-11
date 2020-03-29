//Conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        //Header da requisição
        const ong_id = request.headers.authorization;

        //Busca de casos por Ong
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

            return response.json(incidents);
    }
}
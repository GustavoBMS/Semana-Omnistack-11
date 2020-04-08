//Conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {

    async index(request,response){

        const { page = 1 } = request.query;

        //Variavel para contar os campos
        const [count] = await connection('incidents').count()

        //Efetua a paginação da rota
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        //Salva o total de linhas em uma propriedade do Header
        response.header('X-Total-Count', count['count(*)']);

        console.log(incidents);

        return response.json(incidents);
    },

    async create(request, response){
        //Desestruturação do acesso dos parametros que vem do BD
        const {title, description, value} = request.body;
        //Coluna da tabela id que ficara no Header da requisição
        const ong_id = request.headers.authorization;

        //O resultado retornara um array, entao declaro o primeiro campo que é id para usar como parametro para o retorno
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        console.log([id])

        return response.json({ id });
    },

    async delete(request, response){
        //Coluna da tabela id que ficara no Header da requisição
        const { id } = request.params;
        //Header da requisição
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id',id) //vai buscar o id pelo que esta na variavel
            .select('ong_id')   //Busca apena a coluna ong_id
            .first();   //Retorna apenas uma linha

        if(incident.ong_id != ong_id){
            return response.status(401).json({ error: "Operation Not Permitted."});
        }

        //Query para deletar
        await connection('incidents').where('id', id).delete();

        //Enviar uma resposta de sucesso sem corpo, sem dado para mostrar, send é para enviar a resposta sem corpo
        return response.status(204).send();

    }
}
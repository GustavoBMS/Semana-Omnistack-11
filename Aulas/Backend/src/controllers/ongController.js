//Conexao com o banco de dados
const connection = require('../database/connection');
//Importa a lib de criptografia
const crypto = require('crypto');

module.exports = {

    //Listar Ongs
    async index(request, response){
        const ongs = await connection('ongs').select('*');

        console.log(ongs);

        return response.json(ongs);
    },

    //Criar Ong
    async create(request, response){
        //Desestruturação do acesso dos parametros que vem do BD
        const {name, email, whatsapp, city, uf} = request.body;

        //Cryptografia
        const id = crypto.randomBytes(4).toString('HEX');

        //Conexao com BD
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        //Como o insert pode demorar, a funcao deve ser assincrona e o Insert em si deve ter um await para poder esperar a execucao terminar para poder continuar, explicacao vaga deve melhorar

        console.log(data);

        return response.json({ id });
    },

    //Devo melhorar essa seção, não funciona como eu gostaria que funciona-se
    async delete(request, response){
        const { id } = request.params;
        //Coluna da tabela id que ficara no Header da requisição
        const ong_header = request.headers.authorization;

        const ongs = await connection('ongs')
            .where('id',id) //vai buscar o id pelo que esta na variavel
            .select('id')   //Busca apena a coluna id
            .first();   //Retorna apenas uma linha

        //if(ongs.ong_header != ong_header){
        //    return response.status(401).json({ error: "Operation Not Permitted."});
        //}

        //Query para deletar
        await connection('ongs').where('id', id).delete();

        //Enviar uma resposta de sucesso sem corpo, sem dado para mostrar, send é para enviar a resposta sem corpo
        return response.status(204).send();

    }
};
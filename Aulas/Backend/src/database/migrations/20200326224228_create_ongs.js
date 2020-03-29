//Aqui crio as tabelas
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

//Aqui deleto a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

//Criar um Migration vale a pena pois e mais organizado e editavel
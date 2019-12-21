
exports.up = function(knex) {
  return knex.schema.createTable('shoes', table => {
    table.increments('id').primary()
    table.integer('productId').notNullable().references('products.id').onDelete('CASCADE');
    table.string('name', 255).notNullable();
    table.timestamp('createdAt', {useTz: true}).notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt', {useTz: true}).notNullable().defaultTo(knex.fn.now());

    table.index('id')
    table.index('productId')
    table.index('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('shoes');
};


exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('brand', 255).notNullable();
    table.timestamp('createdAt', {useTz: true}).notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt', {useTz: true}).notNullable().defaultTo(knex.fn.now());

    table.index('id')
    table.index('brand');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};

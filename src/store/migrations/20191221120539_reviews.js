
exports.up = function(knex) {
  return knex.schema.createTable('reviews', table => {
    table.increments('id').primary();
    table.integer('productId').notNullable().references('products.id').onDelete('CASCADE');
    table.enu('trueToSizeScore', [1, 2, 3, 4, 5])
    table.timestamp('createdAt', {useTz: true}).notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt', {useTz: true}).notNullable().defaultTo(knex.fn.now());

    table.index('id')
    table.index('productId');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};

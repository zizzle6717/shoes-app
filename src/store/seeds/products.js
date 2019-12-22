
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, brand: 'Adidas'},
        {id: 2, brand: 'Nike'},
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoes').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoes').insert([
        {id: 1, productId: 1, name: 'Yeezy' },
        {id: 2, productId: 2, name: 'Air' }
      ]);
    });
};

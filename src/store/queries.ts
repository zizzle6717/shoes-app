import Knex from 'knex';

const knex = Knex({ client: 'pg' });
const PRODUCTS_TABLE = 'products';
const SHOES_TABLE = 'shoes';

export const getProductsQuery = (conditions = {}) => {
  return knex.select([
    'id',
    'brand',
    'createdAt',
    'updatedAt',
  ])
    .from(PRODUCTS_TABLE)
    .where(conditions)
    .toString();
};

export const getShoesQuery = (conditions = {}) => {
  return knex.select([
    'id',
    'productId',
    'name',
    'createdAt',
    'updatedAt',
  ])
    .from(SHOES_TABLE)
    .where(conditions)
    .toString();
};

import Knex from 'knex';
import tableNames from '../constants/tableNames';

const knex = Knex({ client: 'pg' });

export const getProductsQuery = (conditions = {}) => knex.select([
  'id',
  'brand',
  'createdAt',
  'updatedAt',
])
  .from(tableNames.PRODUCTS)
  .where(conditions)
  .toString();

export const getShoesQuery = (conditions = {}) => knex.select([
  'id',
  'productId',
  'name',
  'createdAt',
  'updatedAt',
])
  .from(tableNames.SHOES)
  .where(conditions)
  .toString();

export const getReviewsQuery = (conditions = {}) => knex.select([
  'id',
  'productId',
  'trueToSizeScore',
  'createdAt',
  'updatedAt',
])
  .from(tableNames.REVIEWS)
  .where(conditions)
  .toString();

export const createReviewQuery = (review) => knex.insert(review)
  .into(tableNames.REVIEWS)
  .returning('id')
  .toString();

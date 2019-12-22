/* eslint-disable quotes, max-len */

import { expect } from 'chai';
import {
  getProductsQuery,
  getShoesQuery,
} from '../../../src/store/queries';

describe('Queries', () => {
  describe('getProducts()', () => {
    it('should return a postgresql query to select products from db', () => {
      const expected = `select "id", "brand", "createdAt", "updatedAt" from "products" where "id" = 5`;
      const actual = getProductsQuery({
        id: 1,
      });
      expect(actual).to.equal(expected);
    });
  });

  describe('getShoes()', () => {
    it('should return a postgresql query to select shoes from db', () => {
      const expected = `select "id", "productId", "name", "createdAt", "updatedAt" from "shoes" where "id" = 2`;
      const actual = getShoesQuery({
        id: 2,
      });
      expect(actual).to.equal(expected);
    });
  });
});

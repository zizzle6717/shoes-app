import { expect, should } from 'chai';
import sinon from 'sinon';
import supertest from 'supertest';
import app from '../../src/app';
import db from '../../src/store/db';
import store from '../../src/store';
import redisClient from '../../src/store/redisClient';
import Cache from '../../src/store/Cache';

const baseUrl = '/v1';
should();

describe('Routes', () => {
  let server;
  let request;

  // Reset data to initial seed after running all integration tests
  const teardown = async () => {
    await db.write.query('DELETE from products WHERE id != 1 AND id != 2');
    await db.write.query('DELETE from shoes WHERE id != 1 AND id != 2');
    await db.write.query('DELETE from reviews');
    await redisClient.flushall();
  };

  before(async () => {
    server = app.listen();
    request = supertest.agent(server);
  });

  after(async () => {
    server.close();
    await teardown();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('GET /_healthz', () => {
    it('should have a health check endpoint', async () => {
      await request
        .get('/_healthz')
        .expect(200);
    });
  });

  describe('GET /products', () => {
    it('should handle errors', async () => {
      const mockErrorMsg = 'Mock error message';
      sinon.stub(store, 'getProducts').rejects(new Error(mockErrorMsg));
      const response = await request
        .get(`${baseUrl}/products`)
        .expect(500);

      expect(response.body.message).to.be.equal('Failed to fetch products.');
      expect(response.body.error).to.be.equal(mockErrorMsg);
    });

    it('should return a list of products', async () => {
      const response = await request
        .get(`${baseUrl}/products`)
        .expect(200);

      expect(response.body.products.length).to.be.equal(2);
    });
  });

  describe('GET /products/:productId', () => {
    it('should handle errors', async () => {
      const mockProductId = 5;
      const mockErrorMsg = 'Mock error message';
      sinon.stub(store, 'getProducts').rejects(new Error(mockErrorMsg));
      const response = await request
        .get(`${baseUrl}/products/${mockProductId}`)
        .expect(500);

      expect(response.body.message).to.be.equal('Failed to fetch product.');
      expect(response.body.error).to.be.equal(mockErrorMsg);
    });

    it('should handle NotFound', async () => {
      const mockProductId = 5;
      const response = await request
        .get(`${baseUrl}/products/${mockProductId}`)
        .expect(404);

      expect(response.body.message).to.be.equal('Product not found.');
      expect(response.body.statusCode).to.be.equal(404);
    });

    it('should return a product', async () => {
      const mockProductId = 1;
      const response = await request
        .get(`${baseUrl}/products/${mockProductId}`)
        .expect(200);

      expect(response.body.id).to.be.equal(mockProductId);
      expect(response.body.reviews.length).to.be.equal(1);

      // Cache product for next test
      await Cache.setProduct(response.body.id, response.body);
    });

    it('uses cached copy of product when available', async () => {
      const mockProductId = 1;
      const response = await request
        .get(`${baseUrl}/products/${mockProductId}`)
        .expect(200);

      expect(response.body.id).to.be.equal(mockProductId);
      expect(response.body.reviews.length).to.be.equal(1);
    });
  });
});

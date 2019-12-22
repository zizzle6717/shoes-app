import { expect, should } from 'chai';
import sinon from 'sinon';
import supertest from 'supertest';
import app from '../../src/app';
import store from '../../src/store';

const baseUrl = '/v1';
should();

describe('Routes', () => {
  let server;
  let request;

  const teardown = () => {
    return;
  };

  before(async () => {
    await teardown();

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
      expect(response.body.shoe.productId).to.be.equal(mockProductId);
      expect(response.body.reviews.length).to.be.equal(0);
    });
  });
});

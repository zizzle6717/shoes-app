import { expect, should } from 'chai';
import sinon from 'sinon';
import supertest from 'supertest';
import app from '../../src/app';
import db from '../../src/store/db';
import store from '../../src/store';
import redisClient from '../../src/store/redisClient';

const baseUrl = '/v1';
should();

describe('Routes', () => {
  let server;
  let request;

  // Reset data to initial seed before running any integration tests
  const teardown = async () => {
    await db.write.query('DELETE from products WHERE id != 1 AND id != 2');
    await db.write.query('DELETE from shoes WHERE id != 1 AND id != 2');
    await db.write.query('DELETE from reviews');
    await redisClient.flushall();
  };

  before(async () => {
    server = app.listen();
    request = supertest.agent(server);
    await teardown();
  });

  after(async () => {
    server.close();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('CREATE /products/:productId/reviews', () => {
    it('should handle errors', async () => {
      const mockErrorMsg = 'Mock error message';
      sinon.stub(store, 'getProducts').rejects(new Error(mockErrorMsg));
      const response = await request
        .post(`${baseUrl}/products/1/reviews`)
        .expect(500);

      expect(response.body.message).to.be.equal('Failed to save review.');
      expect(response.body.error).to.be.equal(mockErrorMsg);
    });

    it('return 404 when no product is found', async () => {
      const response = await request
        .post(`${baseUrl}/products/5/reviews`)
        .expect(404);

      expect(response.body.message).to.be.equal('Product not found.');
      expect(response.body.statusCode).to.be.equal(404);
    });

    it('should return the id of the newly created review', async () => {
      const mockReview = {
        productId: 1,
        trueToSizeScore: 5,
      };
      const response = await request
        .post(`${baseUrl}/products/1/reviews`)
        .send(mockReview)
        .expect(201);

      expect(response.body).to.have.property('id');
    });
  });
});

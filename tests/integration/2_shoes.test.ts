import { expect, should } from 'chai';
import sinon from 'sinon';
import supertest from 'supertest';
import app from '../../src/app';
import store from '../../src/store';
import Cache from '../../src/store/Cache';

const baseUrl = '/v1';
should();

describe('Routes', () => {
  let server;
  let request;

  const teardown = () => undefined;

  before(async () => {
    await teardown();

    server = app.listen();
    request = supertest.agent(server);
  });

  after(async () => {
    server.close();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('GET /shoes', () => {
    it('should handle errors', async () => {
      const mockErrorMsg = 'Mock error message';
      sinon.stub(store, 'getShoes').rejects(new Error(mockErrorMsg));
      const response = await request
        .get(`${baseUrl}/shoes`)
        .expect(500);

      expect(response.body.message).to.be.equal('Failed to fetch shoes.');
      expect(response.body.error).to.be.equal(mockErrorMsg);
    });

    it('should return a list of shoes', async () => {
      const response = await request
        .get(`${baseUrl}/shoes`)
        .expect(200);

      expect(response.body.shoes.length).to.be.equal(2);
    });
  });

  describe('GET /shoes/:shoeId', () => {
    it('should handle errors', async () => {
      const mockShoeId = 5;
      const mockErrorMsg = 'Mock error message';
      sinon.stub(store, 'getShoes').rejects(new Error(mockErrorMsg));
      const response = await request
        .get(`${baseUrl}/shoes/${mockShoeId}`)
        .expect(500);

      expect(response.body.message).to.be.equal('Failed to fetch shoe.');
      expect(response.body.error).to.be.equal(mockErrorMsg);
    });

    it('should handle NotFound', async () => {
      const mockShoeId = 5;
      const response = await request
        .get(`${baseUrl}/shoes/${mockShoeId}`)
        .expect(404);

      expect(response.body.message).to.be.equal('Shoe not found.');
      expect(response.body.statusCode).to.be.equal(404);
    });

    it('should return a shoe', async () => {
      const mockShoeId = 1;
      const response = await request
        .get(`${baseUrl}/shoes/${mockShoeId}`)
        .expect(200);

      expect(response.body.id).to.be.equal(mockShoeId);
      expect(response.body.reviews.length).to.be.equal(1);

      // Cache shoe for next test
      await Cache.setShoe(response.body.id, response.body);
    });

    it('uses cached copy of shoe when available', async () => {
      const mockShoeId = 1;
      const response = await request
        .get(`${baseUrl}/shoes/${mockShoeId}`)
        .expect(200);

      expect(response.body.id).to.be.equal(mockShoeId);
      expect(response.body.reviews.length).to.be.equal(1);
    });
  });
});

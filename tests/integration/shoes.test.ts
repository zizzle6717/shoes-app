import { expect, should } from 'chai';
import sinon from 'sinon';
import supertest from 'supertest';
import app from '../../src/app';

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

  describe('GET /shoes', () => {
    it('should return a list of shoes', async () => {
      const response = await request
        .get(`${baseUrl}/shoes`)
        .expect(200);
      
      expect(response.body.shoes.length).to.be.equal(2);
    });
  });

  describe('GET /shoes/:shoeId', () => {
    it('should return a shoe', async () => {
      const mockShoeId = 1;
      const response = await request
        .get(`${baseUrl}/shoes/${mockShoeId}`)
        .expect(200);
      
      expect(response.body.id).to.be.equal(mockShoeId);
    });
  });
});

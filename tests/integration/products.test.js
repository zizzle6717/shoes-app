"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const store_1 = __importDefault(require("../../src/store"));
const baseUrl = '/v1';
chai_1.should();
describe('Routes', () => {
    let server;
    let request;
    const teardown = () => undefined;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield teardown();
        server = app_1.default.listen();
        request = supertest_1.default.agent(server);
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        server.close();
        yield teardown();
    }));
    afterEach(() => {
        sinon_1.default.restore();
    });
    describe('GET /_healthz', () => {
        it('should have a health check endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request
                .get('/_healthz')
                .expect(200);
        }));
    });
    describe('GET /products', () => {
        it('should handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockErrorMsg = 'Mock error message';
            sinon_1.default.stub(store_1.default, 'getProducts').rejects(new Error(mockErrorMsg));
            const response = yield request
                .get(`${baseUrl}/products`)
                .expect(500);
            chai_1.expect(response.body.message).to.be.equal('Failed to fetch products.');
            chai_1.expect(response.body.error).to.be.equal(mockErrorMsg);
        }));
        it('should return a list of products', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request
                .get(`${baseUrl}/products`)
                .expect(200);
            chai_1.expect(response.body.products.length).to.be.equal(2);
        }));
    });
    describe('GET /products/:productId', () => {
        it('should handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockProductId = 5;
            const mockErrorMsg = 'Mock error message';
            sinon_1.default.stub(store_1.default, 'getProducts').rejects(new Error(mockErrorMsg));
            const response = yield request
                .get(`${baseUrl}/products/${mockProductId}`)
                .expect(500);
            chai_1.expect(response.body.message).to.be.equal('Failed to fetch product.');
            chai_1.expect(response.body.error).to.be.equal(mockErrorMsg);
        }));
        it('should handle NotFound', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockProductId = 5;
            const response = yield request
                .get(`${baseUrl}/products/${mockProductId}`)
                .expect(404);
            chai_1.expect(response.body.message).to.be.equal('Product not found.');
            chai_1.expect(response.body.statusCode).to.be.equal(404);
        }));
        it('should return a product', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockProductId = 1;
            const response = yield request
                .get(`${baseUrl}/products/${mockProductId}`)
                .expect(200);
            chai_1.expect(response.body.id).to.be.equal(mockProductId);
            chai_1.expect(response.body.reviews.length).to.be.equal(0);
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3RzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBc0M7QUFDdEMsa0RBQTBCO0FBQzFCLDBEQUFrQztBQUNsQyx3REFBZ0M7QUFDaEMsNERBQW9DO0FBRXBDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN0QixhQUFNLEVBQUUsQ0FBQztBQUVULFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxPQUFPLENBQUM7SUFFWixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFFakMsTUFBTSxDQUFDLEdBQVMsRUFBRTtRQUNoQixNQUFNLFFBQVEsRUFBRSxDQUFDO1FBRWpCLE1BQU0sR0FBRyxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBUyxFQUFFO1FBQ2YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLGVBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQzdCLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFTLEVBQUU7WUFDbkQsTUFBTSxPQUFPO2lCQUNWLEdBQUcsQ0FBQyxXQUFXLENBQUM7aUJBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFD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QUUsR0FBUyxFQUFFO1lBQ3ZDLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN4QixNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU87aUJBQzNCLEdBQUcsQ0FBQyxHQUFHLE9BQU8sYUFBYSxhQUFhLEVBQUUsQ0FBQztpQkFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWYsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZWN0LCBzaG91bGQgfSBmcm9tICdjaGFpJztcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XG5pbXBvcnQgc3VwZXJ0ZXN0IGZyb20gJ3N1cGVydGVzdCc7XG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL3NyYy9hcHAnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3NyYy9zdG9yZSc7XG5cbmNvbnN0IGJhc2VVcmwgPSAnL3YxJztcbnNob3VsZCgpO1xuXG5kZXNjcmliZSgnUm91dGVzJywgKCkgPT4ge1xuICBsZXQgc2VydmVyO1xuICBsZXQgcmVxdWVzdDtcblxuICBjb25zdCB0ZWFyZG93biA9ICgpID0+IHVuZGVmaW5lZDtcblxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRlYXJkb3duKCk7XG5cbiAgICBzZXJ2ZXIgPSBhcHAubGlzdGVuKCk7XG4gICAgcmVxdWVzdCA9IHN1cGVydGVzdC5hZ2VudChzZXJ2ZXIpO1xuICB9KTtcblxuICBhZnRlcihhc3luYyAoKSA9PiB7XG4gICAgc2VydmVyLmNsb3NlKCk7XG4gICAgYXdhaXQgdGVhcmRvd24oKTtcbiAgfSk7XG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBzaW5vbi5yZXN0b3JlKCk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdHRVQgL19oZWFsdGh6JywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGF2ZSBhIGhlYWx0aCBjaGVjayBlbmRwb2ludCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldCgnL19oZWFsdGh6JylcbiAgICAgICAgLmV4cGVjdCgyMDApO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnR0VUIC9wcm9kdWN0cycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGhhbmRsZSBlcnJvcnMnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrRXJyb3JNc2cgPSAnTW9jayBlcnJvciBtZXNzYWdlJztcbiAgICAgIHNpbm9uLnN0dWIoc3RvcmUsICdnZXRQcm9kdWN0cycpLnJlamVjdHMobmV3IEVycm9yKG1vY2tFcnJvck1zZykpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoYCR7YmFzZVVybH0vcHJvZHVjdHNgKVxuICAgICAgICAuZXhwZWN0KDUwMCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lm1lc3NhZ2UpLnRvLmJlLmVxdWFsKCdGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdHMuJyk7XG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5lcnJvcikudG8uYmUuZXF1YWwobW9ja0Vycm9yTXNnKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgbGlzdCBvZiBwcm9kdWN0cycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzYClcbiAgICAgICAgLmV4cGVjdCgyMDApO1xuXG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5wcm9kdWN0cy5sZW5ndGgpLnRvLmJlLmVxdWFsKDIpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnR0VUIC9wcm9kdWN0cy86cHJvZHVjdElkJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGFuZGxlIGVycm9ycycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vY2tQcm9kdWN0SWQgPSA1O1xuICAgICAgY29uc3QgbW9ja0Vycm9yTXNnID0gJ01vY2sgZXJyb3IgbWVzc2FnZSc7XG4gICAgICBzaW5vbi5zdHViKHN0b3JlLCAnZ2V0UHJvZHVjdHMnKS5yZWplY3RzKG5ldyBFcnJvcihtb2NrRXJyb3JNc2cpKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzLyR7bW9ja1Byb2R1Y3RJZH1gKVxuICAgICAgICAuZXhwZWN0KDUwMCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lm1lc3NhZ2UpLnRvLmJlLmVxdWFsKCdGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdC4nKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmVycm9yKS50by5iZS5lcXVhbChtb2NrRXJyb3JNc2cpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgTm90Rm91bmQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrUHJvZHVjdElkID0gNTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzLyR7bW9ja1Byb2R1Y3RJZH1gKVxuICAgICAgICAuZXhwZWN0KDQwNCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lm1lc3NhZ2UpLnRvLmJlLmVxdWFsKCdQcm9kdWN0IG5vdCBmb3VuZC4nKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LnN0YXR1c0NvZGUpLnRvLmJlLmVxdWFsKDQwNCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb2R1Y3QnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrUHJvZHVjdElkID0gMTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzLyR7bW9ja1Byb2R1Y3RJZH1gKVxuICAgICAgICAuZXhwZWN0KDIwMCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmlkKS50by5iZS5lcXVhbChtb2NrUHJvZHVjdElkKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LnJldmlld3MubGVuZ3RoKS50by5iZS5lcXVhbCgwKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==
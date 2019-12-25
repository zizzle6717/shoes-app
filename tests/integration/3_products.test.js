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
const db_1 = __importDefault(require("../../src/store/db"));
const store_1 = __importDefault(require("../../src/store"));
const redisClient_1 = __importDefault(require("../../src/store/redisClient"));
const Cache_1 = __importDefault(require("../../src/store/Cache"));
const baseUrl = '/v1';
chai_1.should();
describe('Routes', () => {
    let server;
    let request;
    // Reset data to initial seed after running all integration tests
    const teardown = () => __awaiter(void 0, void 0, void 0, function* () {
        yield db_1.default.write.query('DELETE from products WHERE id != 1 AND id != 2');
        yield db_1.default.write.query('DELETE from shoes WHERE id != 1 AND id != 2');
        yield db_1.default.write.query('DELETE from reviews');
        yield redisClient_1.default.flushall();
    });
    before(() => __awaiter(void 0, void 0, void 0, function* () {
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
            chai_1.expect(response.body.reviews.length).to.be.equal(1);
            // Cache product for next test
            yield Cache_1.default.setProduct(response.body.id, response.body);
        }));
        it('uses cached copy of product when available', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockProductId = 1;
            const response = yield request
                .get(`${baseUrl}/products/${mockProductId}`)
                .expect(200);
            chai_1.expect(response.body.id).to.be.equal(mockProductId);
            chai_1.expect(response.body.reviews.length).to.be.equal(1);
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiM19wcm9kdWN0cy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiM19wcm9kdWN0cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXNDO0FBQ3RDLGtEQUEwQjtBQUMxQiwwREFBa0M7QUFDbEMsd0RBQWdDO0FBQ2hDLDREQUFvQztBQUNwQyw0REFBb0M7QUFDcEMsOEVBQXNEO0FBQ3RELGtFQUEwQztBQUUxQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDdEIsYUFBTSxFQUFFLENBQUM7QUFFVCxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUN0QixJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksT0FBTyxDQUFDO0lBRVosaUVBQWlFO0lBQ2pFLE1BQU0sUUFBUSxHQUFHLEdBQVMsRUFBRTtRQUMxQixNQUFNLFlBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFDdkUsTUFBTSxZQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sWUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1QyxNQUFNLHFCQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFBLENBQUM7SUFFRixNQUFNLENBQUMsR0FBUyxFQUFFO1FBQ2hCLE1BQU0sR0FBRyxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBUyxFQUFFO1FBQ2YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLEdB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QUFDO1lBRWYsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZWN0LCBzaG91bGQgfSBmcm9tICdjaGFpJztcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XG5pbXBvcnQgc3VwZXJ0ZXN0IGZyb20gJ3N1cGVydGVzdCc7XG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL3NyYy9hcHAnO1xuaW1wb3J0IGRiIGZyb20gJy4uLy4uL3NyYy9zdG9yZS9kYic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3JjL3N0b3JlJztcbmltcG9ydCByZWRpc0NsaWVudCBmcm9tICcuLi8uLi9zcmMvc3RvcmUvcmVkaXNDbGllbnQnO1xuaW1wb3J0IENhY2hlIGZyb20gJy4uLy4uL3NyYy9zdG9yZS9DYWNoZSc7XG5cbmNvbnN0IGJhc2VVcmwgPSAnL3YxJztcbnNob3VsZCgpO1xuXG5kZXNjcmliZSgnUm91dGVzJywgKCkgPT4ge1xuICBsZXQgc2VydmVyO1xuICBsZXQgcmVxdWVzdDtcblxuICAvLyBSZXNldCBkYXRhIHRvIGluaXRpYWwgc2VlZCBhZnRlciBydW5uaW5nIGFsbCBpbnRlZ3JhdGlvbiB0ZXN0c1xuICBjb25zdCB0ZWFyZG93biA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkYi53cml0ZS5xdWVyeSgnREVMRVRFIGZyb20gcHJvZHVjdHMgV0hFUkUgaWQgIT0gMSBBTkQgaWQgIT0gMicpO1xuICAgIGF3YWl0IGRiLndyaXRlLnF1ZXJ5KCdERUxFVEUgZnJvbSBzaG9lcyBXSEVSRSBpZCAhPSAxIEFORCBpZCAhPSAyJyk7XG4gICAgYXdhaXQgZGIud3JpdGUucXVlcnkoJ0RFTEVURSBmcm9tIHJldmlld3MnKTtcbiAgICBhd2FpdCByZWRpc0NsaWVudC5mbHVzaGFsbCgpO1xuICB9O1xuXG4gIGJlZm9yZShhc3luYyAoKSA9PiB7XG4gICAgc2VydmVyID0gYXBwLmxpc3RlbigpO1xuICAgIHJlcXVlc3QgPSBzdXBlcnRlc3QuYWdlbnQoc2VydmVyKTtcbiAgfSk7XG5cbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgIHNlcnZlci5jbG9zZSgpO1xuICAgIGF3YWl0IHRlYXJkb3duKCk7XG4gIH0pO1xuXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgc2lub24ucmVzdG9yZSgpO1xuICB9KTtcblxuICBkZXNjcmliZSgnR0VUIC9faGVhbHRoeicsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGhhdmUgYSBoZWFsdGggY2hlY2sgZW5kcG9pbnQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoJy9faGVhbHRoeicpXG4gICAgICAgIC5leHBlY3QoMjAwKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0dFVCAvcHJvZHVjdHMnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgZXJyb3JzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9ja0Vycm9yTXNnID0gJ01vY2sgZXJyb3IgbWVzc2FnZSc7XG4gICAgICBzaW5vbi5zdHViKHN0b3JlLCAnZ2V0UHJvZHVjdHMnKS5yZWplY3RzKG5ldyBFcnJvcihtb2NrRXJyb3JNc2cpKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzYClcbiAgICAgICAgLmV4cGVjdCg1MDApO1xuXG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5tZXNzYWdlKS50by5iZS5lcXVhbCgnRmFpbGVkIHRvIGZldGNoIHByb2R1Y3RzLicpO1xuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuZXJyb3IpLnRvLmJlLmVxdWFsKG1vY2tFcnJvck1zZyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIGxpc3Qgb2YgcHJvZHVjdHMnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldChgJHtiYXNlVXJsfS9wcm9kdWN0c2ApXG4gICAgICAgIC5leHBlY3QoMjAwKTtcblxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkucHJvZHVjdHMubGVuZ3RoKS50by5iZS5lcXVhbCgyKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0dFVCAvcHJvZHVjdHMvOnByb2R1Y3RJZCcsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGhhbmRsZSBlcnJvcnMnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrUHJvZHVjdElkID0gNTtcbiAgICAgIGNvbnN0IG1vY2tFcnJvck1zZyA9ICdNb2NrIGVycm9yIG1lc3NhZ2UnO1xuICAgICAgc2lub24uc3R1YihzdG9yZSwgJ2dldFByb2R1Y3RzJykucmVqZWN0cyhuZXcgRXJyb3IobW9ja0Vycm9yTXNnKSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldChgJHtiYXNlVXJsfS9wcm9kdWN0cy8ke21vY2tQcm9kdWN0SWR9YClcbiAgICAgICAgLmV4cGVjdCg1MDApO1xuXG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5tZXNzYWdlKS50by5iZS5lcXVhbCgnRmFpbGVkIHRvIGZldGNoIHByb2R1Y3QuJyk7XG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5lcnJvcikudG8uYmUuZXF1YWwobW9ja0Vycm9yTXNnKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgaGFuZGxlIE5vdEZvdW5kJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9ja1Byb2R1Y3RJZCA9IDU7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldChgJHtiYXNlVXJsfS9wcm9kdWN0cy8ke21vY2tQcm9kdWN0SWR9YClcbiAgICAgICAgLmV4cGVjdCg0MDQpO1xuXG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5tZXNzYWdlKS50by5iZS5lcXVhbCgnUHJvZHVjdCBub3QgZm91bmQuJyk7XG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5zdGF0dXNDb2RlKS50by5iZS5lcXVhbCg0MDQpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwcm9kdWN0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9ja1Byb2R1Y3RJZCA9IDE7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldChgJHtiYXNlVXJsfS9wcm9kdWN0cy8ke21vY2tQcm9kdWN0SWR9YClcbiAgICAgICAgLmV4cGVjdCgyMDApO1xuXG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5pZCkudG8uYmUuZXF1YWwobW9ja1Byb2R1Y3RJZCk7XG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5yZXZpZXdzLmxlbmd0aCkudG8uYmUuZXF1YWwoMSk7XG5cbiAgICAgIC8vIENhY2hlIHByb2R1Y3QgZm9yIG5leHQgdGVzdFxuICAgICAgYXdhaXQgQ2FjaGUuc2V0UHJvZHVjdChyZXNwb25zZS5ib2R5LmlkLCByZXNwb25zZS5ib2R5KTtcbiAgICB9KTtcblxuICAgIGl0KCd1c2VzIGNhY2hlZCBjb3B5IG9mIHByb2R1Y3Qgd2hlbiBhdmFpbGFibGUnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrUHJvZHVjdElkID0gMTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzLyR7bW9ja1Byb2R1Y3RJZH1gKVxuICAgICAgICAuZXhwZWN0KDIwMCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmlkKS50by5iZS5lcXVhbChtb2NrUHJvZHVjdElkKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LnJldmlld3MubGVuZ3RoKS50by5iZS5lcXVhbCgxKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==
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
const Cache_1 = __importDefault(require("../../src/store/Cache"));
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
    }));
    afterEach(() => {
        sinon_1.default.restore();
    });
    describe('GET /shoes', () => {
        it('should handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockErrorMsg = 'Mock error message';
            sinon_1.default.stub(store_1.default, 'getShoes').rejects(new Error(mockErrorMsg));
            const response = yield request
                .get(`${baseUrl}/shoes`)
                .expect(500);
            chai_1.expect(response.body.message).to.be.equal('Failed to fetch shoes.');
            chai_1.expect(response.body.error).to.be.equal(mockErrorMsg);
        }));
        it('should return a list of shoes', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request
                .get(`${baseUrl}/shoes`)
                .expect(200);
            chai_1.expect(response.body.shoes.length).to.be.equal(2);
        }));
    });
    describe('GET /shoes/:shoeId', () => {
        it('should handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockShoeId = 5;
            const mockErrorMsg = 'Mock error message';
            sinon_1.default.stub(store_1.default, 'getShoes').rejects(new Error(mockErrorMsg));
            const response = yield request
                .get(`${baseUrl}/shoes/${mockShoeId}`)
                .expect(500);
            chai_1.expect(response.body.message).to.be.equal('Failed to fetch shoe.');
            chai_1.expect(response.body.error).to.be.equal(mockErrorMsg);
        }));
        it('should handle NotFound', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockShoeId = 5;
            const response = yield request
                .get(`${baseUrl}/shoes/${mockShoeId}`)
                .expect(404);
            chai_1.expect(response.body.message).to.be.equal('Shoe not found.');
            chai_1.expect(response.body.statusCode).to.be.equal(404);
        }));
        it('should return a shoe', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockShoeId = 1;
            const response = yield request
                .get(`${baseUrl}/shoes/${mockShoeId}`)
                .expect(200);
            chai_1.expect(response.body.id).to.be.equal(mockShoeId);
            chai_1.expect(response.body.reviews.length).to.be.equal(1);
            // Cache shoe for next test
            yield Cache_1.default.setShoe(response.body.id, response.body);
        }));
        it('uses cached copy of shoe when available', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockShoeId = 1;
            const response = yield request
                .get(`${baseUrl}/shoes/${mockShoeId}`)
                .expect(200);
            chai_1.expect(response.body.id).to.be.equal(mockShoeId);
            chai_1.expect(response.body.reviews.length).to.be.equal(1);
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMl9zaG9lcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiMl9zaG9lcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXNDO0FBQ3RDLGtEQUEwQjtBQUMxQiwwREFBa0M7QUFDbEMsd0RBQWdDO0FBQ2hDLDREQUFvQztBQUNwQyxrRUFBMEM7QUFFMUMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGFBQU0sRUFBRSxDQUFDO0FBRVQsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLE9BQU8sQ0FBQztJQUVaLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUVqQyxNQUFNLENBQUMsR0FBUyxFQUFFO1FBQ2hCLE1BQU0sUUFBUSxFQUFFLENBQUM7UUFFakIsTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixPQUFPLEdBQUcsbUJBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFTLEVBQUU7UUFDZixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixlQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtRQUMxQixFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBUyxFQUFFO1lBQ3BDLE1BQU0sWUFBWSxHQUFHLG9CQUFvQixDQUFDO1lBQzFDLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFD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RSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBELDJCQUEyQjtZQUMzQixNQUFNLGVBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMseUNBQXlDLEVBQUUsR0FBUyxFQUFFO1lBQ3ZELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNyQixNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU87aUJBQzNCLEdBQUcsQ0FBQyxHQUFHLE9BQU8sVUFBVSxVQUFVLEVBQUUsQ0FBQztpQkFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWYsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZWN0LCBzaG91bGQgfSBmcm9tICdjaGFpJztcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XG5pbXBvcnQgc3VwZXJ0ZXN0IGZyb20gJ3N1cGVydGVzdCc7XG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL3NyYy9hcHAnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3NyYy9zdG9yZSc7XG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi4vLi4vc3JjL3N0b3JlL0NhY2hlJztcblxuY29uc3QgYmFzZVVybCA9ICcvdjEnO1xuc2hvdWxkKCk7XG5cbmRlc2NyaWJlKCdSb3V0ZXMnLCAoKSA9PiB7XG4gIGxldCBzZXJ2ZXI7XG4gIGxldCByZXF1ZXN0O1xuXG4gIGNvbnN0IHRlYXJkb3duID0gKCkgPT4gdW5kZWZpbmVkO1xuXG4gIGJlZm9yZShhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdGVhcmRvd24oKTtcblxuICAgIHNlcnZlciA9IGFwcC5saXN0ZW4oKTtcbiAgICByZXF1ZXN0ID0gc3VwZXJ0ZXN0LmFnZW50KHNlcnZlcik7XG4gIH0pO1xuXG4gIGFmdGVyKGFzeW5jICgpID0+IHtcbiAgICBzZXJ2ZXIuY2xvc2UoKTtcbiAgfSk7XG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBzaW5vbi5yZXN0b3JlKCk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdHRVQgL3Nob2VzJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGFuZGxlIGVycm9ycycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vY2tFcnJvck1zZyA9ICdNb2NrIGVycm9yIG1lc3NhZ2UnO1xuICAgICAgc2lub24uc3R1YihzdG9yZSwgJ2dldFNob2VzJykucmVqZWN0cyhuZXcgRXJyb3IobW9ja0Vycm9yTXNnKSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldChgJHtiYXNlVXJsfS9zaG9lc2ApXG4gICAgICAgIC5leHBlY3QoNTAwKTtcblxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkubWVzc2FnZSkudG8uYmUuZXF1YWwoJ0ZhaWxlZCB0byBmZXRjaCBzaG9lcy4nKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmVycm9yKS50by5iZS5lcXVhbChtb2NrRXJyb3JNc2cpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBsaXN0IG9mIHNob2VzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoYCR7YmFzZVVybH0vc2hvZXNgKVxuICAgICAgICAuZXhwZWN0KDIwMCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LnNob2VzLmxlbmd0aCkudG8uYmUuZXF1YWwoMik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdHRVQgL3Nob2VzLzpzaG9lSWQnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgZXJyb3JzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9ja1Nob2VJZCA9IDU7XG4gICAgICBjb25zdCBtb2NrRXJyb3JNc2cgPSAnTW9jayBlcnJvciBtZXNzYWdlJztcbiAgICAgIHNpbm9uLnN0dWIoc3RvcmUsICdnZXRTaG9lcycpLnJlamVjdHMobmV3IEVycm9yKG1vY2tFcnJvck1zZykpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoYCR7YmFzZVVybH0vc2hvZXMvJHttb2NrU2hvZUlkfWApXG4gICAgICAgIC5leHBlY3QoNTAwKTtcblxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkubWVzc2FnZSkudG8uYmUuZXF1YWwoJ0ZhaWxlZCB0byBmZXRjaCBzaG9lLicpO1xuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuZXJyb3IpLnRvLmJlLmVxdWFsKG1vY2tFcnJvck1zZyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGhhbmRsZSBOb3RGb3VuZCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vY2tTaG9lSWQgPSA1O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoYCR7YmFzZVVybH0vc2hvZXMvJHttb2NrU2hvZUlkfWApXG4gICAgICAgIC5leHBlY3QoNDA0KTtcblxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkubWVzc2FnZSkudG8uYmUuZXF1YWwoJ1Nob2Ugbm90IGZvdW5kLicpO1xuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuc3RhdHVzQ29kZSkudG8uYmUuZXF1YWwoNDA0KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgc2hvZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vY2tTaG9lSWQgPSAxO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoYCR7YmFzZVVybH0vc2hvZXMvJHttb2NrU2hvZUlkfWApXG4gICAgICAgIC5leHBlY3QoMjAwKTtcblxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuaWQpLnRvLmJlLmVxdWFsKG1vY2tTaG9lSWQpO1xuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkucmV2aWV3cy5sZW5ndGgpLnRvLmJlLmVxdWFsKDEpO1xuXG4gICAgICAvLyBDYWNoZSBzaG9lIGZvciBuZXh0IHRlc3RcbiAgICAgIGF3YWl0IENhY2hlLnNldFNob2UocmVzcG9uc2UuYm9keS5pZCwgcmVzcG9uc2UuYm9keSk7XG4gICAgfSk7XG5cbiAgICBpdCgndXNlcyBjYWNoZWQgY29weSBvZiBzaG9lIHdoZW4gYXZhaWxhYmxlJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9ja1Nob2VJZCA9IDE7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldChgJHtiYXNlVXJsfS9zaG9lcy8ke21vY2tTaG9lSWR9YClcbiAgICAgICAgLmV4cGVjdCgyMDApO1xuXG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5pZCkudG8uYmUuZXF1YWwobW9ja1Nob2VJZCk7XG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5yZXZpZXdzLmxlbmd0aCkudG8uYmUuZXF1YWwoMSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
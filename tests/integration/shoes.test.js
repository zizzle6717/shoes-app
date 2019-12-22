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
            chai_1.expect(response.body.reviews.length).to.be.equal(0);
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvZXMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob2VzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBc0M7QUFDdEMsa0RBQTBCO0FBQzFCLDBEQUFrQztBQUNsQyx3REFBZ0M7QUFDaEMsNERBQW9DO0FBRXBDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN0QixhQUFNLEVBQUUsQ0FBQztBQUVULFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxPQUFPLENBQUM7SUFFWixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFFakMsTUFBTSxDQUFDLEdBQVMsRUFBRTtRQUNoQixNQUFNLFFBQVEsRUFBRSxDQUFDO1FBRWpCLE1BQU0sR0FBRyxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBUyxFQUFFO1FBQ2YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLGVBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQzdCLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFTLEVBQUU7WUFDbkQsTUFBTSxPQUFPO2lCQUNWLEdBQUcsQ0FBQyxXQUFXLENBQUM7aUJBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7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UyxFQUFFO1lBQ3BDLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNyQixNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU87aUJBQzNCLEdBQUcsQ0FBQyxHQUFHLE9BQU8sVUFBVSxVQUFVLEVBQUUsQ0FBQztpQkFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWYsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZWN0LCBzaG91bGQgfSBmcm9tICdjaGFpJztcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XG5pbXBvcnQgc3VwZXJ0ZXN0IGZyb20gJ3N1cGVydGVzdCc7XG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL3NyYy9hcHAnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3NyYy9zdG9yZSc7XG5cbmNvbnN0IGJhc2VVcmwgPSAnL3YxJztcbnNob3VsZCgpO1xuXG5kZXNjcmliZSgnUm91dGVzJywgKCkgPT4ge1xuICBsZXQgc2VydmVyO1xuICBsZXQgcmVxdWVzdDtcblxuICBjb25zdCB0ZWFyZG93biA9ICgpID0+IHVuZGVmaW5lZDtcblxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRlYXJkb3duKCk7XG5cbiAgICBzZXJ2ZXIgPSBhcHAubGlzdGVuKCk7XG4gICAgcmVxdWVzdCA9IHN1cGVydGVzdC5hZ2VudChzZXJ2ZXIpO1xuICB9KTtcblxuICBhZnRlcihhc3luYyAoKSA9PiB7XG4gICAgc2VydmVyLmNsb3NlKCk7XG4gICAgYXdhaXQgdGVhcmRvd24oKTtcbiAgfSk7XG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBzaW5vbi5yZXN0b3JlKCk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdHRVQgL19oZWFsdGh6JywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGF2ZSBhIGhlYWx0aCBjaGVjayBlbmRwb2ludCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldCgnL19oZWFsdGh6JylcbiAgICAgICAgLmV4cGVjdCgyMDApO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnR0VUIC9zaG9lcycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGhhbmRsZSBlcnJvcnMnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrRXJyb3JNc2cgPSAnTW9jayBlcnJvciBtZXNzYWdlJztcbiAgICAgIHNpbm9uLnN0dWIoc3RvcmUsICdnZXRTaG9lcycpLnJlamVjdHMobmV3IEVycm9yKG1vY2tFcnJvck1zZykpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoYCR7YmFzZVVybH0vc2hvZXNgKVxuICAgICAgICAuZXhwZWN0KDUwMCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lm1lc3NhZ2UpLnRvLmJlLmVxdWFsKCdGYWlsZWQgdG8gZmV0Y2ggc2hvZXMuJyk7XG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5lcnJvcikudG8uYmUuZXF1YWwobW9ja0Vycm9yTXNnKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgbGlzdCBvZiBzaG9lcycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Nob2VzYClcbiAgICAgICAgLmV4cGVjdCgyMDApO1xuXG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5zaG9lcy5sZW5ndGgpLnRvLmJlLmVxdWFsKDIpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnR0VUIC9zaG9lcy86c2hvZUlkJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGFuZGxlIGVycm9ycycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vY2tTaG9lSWQgPSA1O1xuICAgICAgY29uc3QgbW9ja0Vycm9yTXNnID0gJ01vY2sgZXJyb3IgbWVzc2FnZSc7XG4gICAgICBzaW5vbi5zdHViKHN0b3JlLCAnZ2V0U2hvZXMnKS5yZWplY3RzKG5ldyBFcnJvcihtb2NrRXJyb3JNc2cpKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Nob2VzLyR7bW9ja1Nob2VJZH1gKVxuICAgICAgICAuZXhwZWN0KDUwMCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lm1lc3NhZ2UpLnRvLmJlLmVxdWFsKCdGYWlsZWQgdG8gZmV0Y2ggc2hvZS4nKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmVycm9yKS50by5iZS5lcXVhbChtb2NrRXJyb3JNc2cpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgTm90Rm91bmQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrU2hvZUlkID0gNTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Nob2VzLyR7bW9ja1Nob2VJZH1gKVxuICAgICAgICAuZXhwZWN0KDQwNCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lm1lc3NhZ2UpLnRvLmJlLmVxdWFsKCdTaG9lIG5vdCBmb3VuZC4nKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LnN0YXR1c0NvZGUpLnRvLmJlLmVxdWFsKDQwNCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHNob2UnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrU2hvZUlkID0gMTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Nob2VzLyR7bW9ja1Nob2VJZH1gKVxuICAgICAgICAuZXhwZWN0KDIwMCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmlkKS50by5iZS5lcXVhbChtb2NrU2hvZUlkKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LnJldmlld3MubGVuZ3RoKS50by5iZS5lcXVhbCgwKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==
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
    const teardown = () => {
        return;
    };
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
            sinon_1.default.stub(store_1.default, 'getProducts').rejects(new Error('Mock error message'));
            const response = yield request
                .get(`${baseUrl}/products/${mockProductId}`)
                .expect(500);
            chai_1.expect(response.body.message).to.be.equal('Failed to fetch product.');
            chai_1.expect(response.body.error).to.be.equal('Mock error message');
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
            chai_1.expect(response.body.shoe.productId).to.be.equal(mockProductId);
            chai_1.expect(response.body.reviews.length).to.be.equal(0);
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3RzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBc0M7QUFDdEMsa0RBQTBCO0FBQzFCLDBEQUFrQztBQUNsQyx3REFBZ0M7QUFDaEMsNERBQW9DO0FBRXBDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN0QixhQUFNLEVBQUUsQ0FBQztBQUVULFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxPQUFPLENBQUM7SUFFWixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDcEIsT0FBTztJQUNULENBQUMsQ0FBQztJQUVGLE1BQU0sQ0FBQyxHQUFTLEVBQUU7UUFDaEIsTUFBTSxRQUFRLEVBQUUsQ0FBQztRQUVqQixNQUFNLEdBQUcsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQVMsRUFBRTtRQUNmLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLE1BQU0sUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixlQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUM3QixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO1lBQ25ELE1BQU0sT0FBTztpQkFDVixHQUFHLENBQUMsV0FBVyxDQUFDO2lCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNM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QUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVjdCwgc2hvdWxkIH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IHN1cGVydGVzdCBmcm9tICdzdXBlcnRlc3QnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9zcmMvYXBwJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zcmMvc3RvcmUnO1xuXG5jb25zdCBiYXNlVXJsID0gJy92MSc7XG5zaG91bGQoKTtcblxuZGVzY3JpYmUoJ1JvdXRlcycsICgpID0+IHtcbiAgbGV0IHNlcnZlcjtcbiAgbGV0IHJlcXVlc3Q7XG5cbiAgY29uc3QgdGVhcmRvd24gPSAoKSA9PiB7XG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIGJlZm9yZShhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdGVhcmRvd24oKTtcblxuICAgIHNlcnZlciA9IGFwcC5saXN0ZW4oKTtcbiAgICByZXF1ZXN0ID0gc3VwZXJ0ZXN0LmFnZW50KHNlcnZlcik7XG4gIH0pO1xuXG4gIGFmdGVyKGFzeW5jICgpID0+IHtcbiAgICBzZXJ2ZXIuY2xvc2UoKTtcbiAgICBhd2FpdCB0ZWFyZG93bigpO1xuICB9KTtcblxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIHNpbm9uLnJlc3RvcmUoKTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0dFVCAvX2hlYWx0aHonLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBoYXZlIGEgaGVhbHRoIGNoZWNrIGVuZHBvaW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KCcvX2hlYWx0aHonKVxuICAgICAgICAuZXhwZWN0KDIwMCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdHRVQgL3Byb2R1Y3RzJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgbGlzdCBvZiBwcm9kdWN0cycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzYClcbiAgICAgICAgLmV4cGVjdCgyMDApO1xuICAgICAgXG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5wcm9kdWN0cy5sZW5ndGgpLnRvLmJlLmVxdWFsKDIpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnR0VUIC9wcm9kdWN0cy86cHJvZHVjdElkJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGFuZGxlIGVycm9ycycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vY2tQcm9kdWN0SWQgPSA1O1xuICAgICAgc2lub24uc3R1YihzdG9yZSwgJ2dldFByb2R1Y3RzJykucmVqZWN0cyhuZXcgRXJyb3IoJ01vY2sgZXJyb3IgbWVzc2FnZScpKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzLyR7bW9ja1Byb2R1Y3RJZH1gKVxuICAgICAgICAuZXhwZWN0KDUwMCk7XG4gICAgICBcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lm1lc3NhZ2UpLnRvLmJlLmVxdWFsKCdGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdC4nKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmVycm9yKS50by5iZS5lcXVhbCgnTW9jayBlcnJvciBtZXNzYWdlJyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGhhbmRsZSBOb3RGb3VuZCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vY2tQcm9kdWN0SWQgPSA1O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoYCR7YmFzZVVybH0vcHJvZHVjdHMvJHttb2NrUHJvZHVjdElkfWApXG4gICAgICAgIC5leHBlY3QoNDA0KTtcbiAgICAgIFxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkubWVzc2FnZSkudG8uYmUuZXF1YWwoJ1Byb2R1Y3Qgbm90IGZvdW5kLicpO1xuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuc3RhdHVzQ29kZSkudG8uYmUuZXF1YWwoNDA0KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvZHVjdCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vY2tQcm9kdWN0SWQgPSAxO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoYCR7YmFzZVVybH0vcHJvZHVjdHMvJHttb2NrUHJvZHVjdElkfWApXG4gICAgICAgIC5leHBlY3QoMjAwKTtcbiAgICAgIFxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuaWQpLnRvLmJlLmVxdWFsKG1vY2tQcm9kdWN0SWQpO1xuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuc2hvZS5wcm9kdWN0SWQpLnRvLmJlLmVxdWFsKG1vY2tQcm9kdWN0SWQpO1xuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkucmV2aWV3cy5sZW5ndGgpLnRvLmJlLmVxdWFsKDApO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19
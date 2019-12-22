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
        it('should return a product', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockShoeId = 1;
            const response = yield request
                .get(`${baseUrl}/products/${mockShoeId}`)
                .expect(200);
            chai_1.expect(response.body.id).to.be.equal(mockShoeId);
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3RzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBc0M7QUFDdEMsa0RBQTBCO0FBQzFCLDBEQUFrQztBQUNsQyx3REFBZ0M7QUFFaEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGFBQU0sRUFBRSxDQUFDO0FBRVQsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLE9BQU8sQ0FBQztJQUVaLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNwQixPQUFPO0lBQ1QsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLEdBQVMsRUFBRTtRQUNoQixNQUFNLFFBQVEsRUFBRSxDQUFDO1FBRWpCLE1BQU0sR0FBRyxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBUyxFQUFFO1FBQ2YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLGVBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQzdCLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFTLEVBQUU7WUFDbkQsTUFBTSxPQUFPO2lCQUNWLEdBQUcsQ0FBQyxXQUFXLENBQUM7aUJBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUM3QixFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBUyxFQUFFO1lBQ2hELE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTztpQkFDM0IsR0FBRyxDQUFDLEdBQUcsT0FBTyxXQUFXLENBQUM7aUJBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVmLGFBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7WUFDdkMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTztpQkFDM0IsR0FBRyxDQUFDLEdBQUcsT0FBTyxhQUFhLFVBQVUsRUFBRSxDQUFDO2lCQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFZixhQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVjdCwgc2hvdWxkIH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IHN1cGVydGVzdCBmcm9tICdzdXBlcnRlc3QnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9zcmMvYXBwJztcblxuY29uc3QgYmFzZVVybCA9ICcvdjEnO1xuc2hvdWxkKCk7XG5cbmRlc2NyaWJlKCdSb3V0ZXMnLCAoKSA9PiB7XG4gIGxldCBzZXJ2ZXI7XG4gIGxldCByZXF1ZXN0O1xuXG4gIGNvbnN0IHRlYXJkb3duID0gKCkgPT4ge1xuICAgIHJldHVybjtcbiAgfTtcblxuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRlYXJkb3duKCk7XG5cbiAgICBzZXJ2ZXIgPSBhcHAubGlzdGVuKCk7XG4gICAgcmVxdWVzdCA9IHN1cGVydGVzdC5hZ2VudChzZXJ2ZXIpO1xuICB9KTtcblxuICBhZnRlcihhc3luYyAoKSA9PiB7XG4gICAgc2VydmVyLmNsb3NlKCk7XG4gICAgYXdhaXQgdGVhcmRvd24oKTtcbiAgfSk7XG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBzaW5vbi5yZXN0b3JlKCk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdHRVQgL19oZWFsdGh6JywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGF2ZSBhIGhlYWx0aCBjaGVjayBlbmRwb2ludCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldCgnL19oZWFsdGh6JylcbiAgICAgICAgLmV4cGVjdCgyMDApO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnR0VUIC9wcm9kdWN0cycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIGxpc3Qgb2YgcHJvZHVjdHMnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldChgJHtiYXNlVXJsfS9wcm9kdWN0c2ApXG4gICAgICAgIC5leHBlY3QoMjAwKTtcbiAgICAgIFxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkucHJvZHVjdHMubGVuZ3RoKS50by5iZS5lcXVhbCgyKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0dFVCAvcHJvZHVjdHMvOnByb2R1Y3RJZCcsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb2R1Y3QnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrU2hvZUlkID0gMTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzLyR7bW9ja1Nob2VJZH1gKVxuICAgICAgICAuZXhwZWN0KDIwMCk7XG4gICAgICBcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmlkKS50by5iZS5lcXVhbChtb2NrU2hvZUlkKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==
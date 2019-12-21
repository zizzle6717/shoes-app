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
    describe('GET /shoes/reviews/:reviewId', () => {
        it('should return a review', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockReviewId = '5';
            const response = yield request
                .get(`${baseUrl}/shoes/reviews/${mockReviewId}`)
                .expect(200);
            chai_1.expect(response.body.id).to.be.equal(mockReviewId);
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvZXMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob2VzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEM7QUFDOUMsa0RBQTBCO0FBQzFCLDBEQUFrQztBQUNsQyx3REFBZ0M7QUFFaEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGFBQU0sRUFBRSxDQUFDO0FBRVQsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLE9BQU8sQ0FBQztJQUVaLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNwQixPQUFPO0lBQ1QsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLEdBQVMsRUFBRTtRQUNoQixNQUFNLFFBQVEsRUFBRSxDQUFDO1FBRWpCLE1BQU0sR0FBRyxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBUyxFQUFFO1FBQ2YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLGVBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQzdCLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFTLEVBQUU7WUFDbkQsTUFBTSxPQUFPO2lCQUNWLEdBQUcsQ0FBQyxXQUFXLENBQUM7aUJBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsOEJBQThCLEVBQUUsR0FBRyxFQUFFO1FBQzVDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7WUFDdEMsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTztpQkFDM0IsR0FBRyxDQUFDLEdBQUcsT0FBTyxrQkFBa0IsWUFBWSxFQUFFLENBQUM7aUJBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVmLGFBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXJ0LCBleHBlY3QsIHNob3VsZCB9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcbmltcG9ydCBzdXBlcnRlc3QgZnJvbSAnc3VwZXJ0ZXN0JztcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vc3JjL2FwcCc7XG5cbmNvbnN0IGJhc2VVcmwgPSAnL3YxJztcbnNob3VsZCgpO1xuXG5kZXNjcmliZSgnUm91dGVzJywgKCkgPT4ge1xuICBsZXQgc2VydmVyO1xuICBsZXQgcmVxdWVzdDtcblxuICBjb25zdCB0ZWFyZG93biA9ICgpID0+IHtcbiAgICByZXR1cm47XG4gIH07XG5cbiAgYmVmb3JlKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB0ZWFyZG93bigpO1xuXG4gICAgc2VydmVyID0gYXBwLmxpc3RlbigpO1xuICAgIHJlcXVlc3QgPSBzdXBlcnRlc3QuYWdlbnQoc2VydmVyKTtcbiAgfSk7XG5cbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgIHNlcnZlci5jbG9zZSgpO1xuICAgIGF3YWl0IHRlYXJkb3duKCk7XG4gIH0pO1xuXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgc2lub24ucmVzdG9yZSgpO1xuICB9KTtcblxuICBkZXNjcmliZSgnR0VUIC9faGVhbHRoeicsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGhhdmUgYSBoZWFsdGggY2hlY2sgZW5kcG9pbnQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5nZXQoJy9faGVhbHRoeicpXG4gICAgICAgIC5leHBlY3QoMjAwKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0dFVCAvc2hvZXMvcmV2aWV3cy86cmV2aWV3SWQnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSByZXZpZXcnLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2NrUmV2aWV3SWQgPSAnNSc7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RcbiAgICAgICAgLmdldChgJHtiYXNlVXJsfS9zaG9lcy9yZXZpZXdzLyR7bW9ja1Jldmlld0lkfWApXG4gICAgICAgIC5leHBlY3QoMjAwKTtcbiAgICAgIFxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuaWQpLnRvLmJlLmVxdWFsKG1vY2tSZXZpZXdJZCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
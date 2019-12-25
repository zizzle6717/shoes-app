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
const baseUrl = '/v1';
chai_1.should();
describe('Routes', () => {
    let server;
    let request;
    // Reset data to initial seed before running any integration tests
    const teardown = () => __awaiter(void 0, void 0, void 0, function* () {
        yield db_1.default.write.query('DELETE from products WHERE id != 1 AND id != 2');
        yield db_1.default.write.query('DELETE from shoes WHERE id != 1 AND id != 2');
        yield db_1.default.write.query('DELETE from reviews');
        yield redisClient_1.default.flushall();
    });
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        server = app_1.default.listen();
        request = supertest_1.default.agent(server);
        yield teardown();
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        server.close();
    }));
    afterEach(() => {
        sinon_1.default.restore();
    });
    describe('CREATE /products/:productId/reviews', () => {
        it('should handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockErrorMsg = 'Mock error message';
            sinon_1.default.stub(store_1.default, 'getProducts').rejects(new Error(mockErrorMsg));
            const response = yield request
                .post(`${baseUrl}/products/1/reviews`)
                .expect(500);
            chai_1.expect(response.body.message).to.be.equal('Failed to save review.');
            chai_1.expect(response.body.error).to.be.equal(mockErrorMsg);
        }));
        it('return 404 when no product is found', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request
                .post(`${baseUrl}/products/5/reviews`)
                .expect(404);
            chai_1.expect(response.body.message).to.be.equal('Product not found.');
            chai_1.expect(response.body.statusCode).to.be.equal(404);
        }));
        it('should return the id of the newly created review', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockReview = {
                productId: 1,
                trueToSizeScore: 5,
            };
            const response = yield request
                .post(`${baseUrl}/products/1/reviews`)
                .send(mockReview)
                .expect(201);
            chai_1.expect(response.body).to.have.property('id');
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMV9yZXZpZXdzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIxX3Jldmlld3MudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFzQztBQUN0QyxrREFBMEI7QUFDMUIsMERBQWtDO0FBQ2xDLHdEQUFnQztBQUNoQyw0REFBb0M7QUFDcEMsNERBQW9DO0FBQ3BDLDhFQUFzRDtBQUV0RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDdEIsYUFBTSxFQUFFLENBQUM7QUFFVCxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUN0QixJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksT0FBTyxDQUFDO0lBRVosa0VBQWtFO0lBQ2xFLE1BQU0sUUFBUSxHQUFHLEdBQVMsRUFBRTtRQUMxQixNQUFNLFlBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFDdkUsTUFBTSxZQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sWUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1QyxNQUFNLHFCQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFBLENBQUM7SUFFRixNQUFNLENBQUMsR0FBUyxFQUFFO1FBQ2hCLE1BQU0sR0FBRyxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFTLEVBQUU7UUFDZixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixlQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO1FBQ25ELEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFTLEVBQUU7WUFDcEMsTUFBTSxZQUFZLEdBQUcsb0JBQW9CLENBQUM7WUFDMUMsZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxPQUFPO2lCQUMzQixJQUFJLENBQUMsR0FBRyxPQUFPLHFCQUFxQixDQUFDO2lCQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFZixhQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3BFLGFBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO1lBQ25ELE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTztpQkFDM0IsSUFBSSxDQUFDLEdBQUcsT0FBTyxxQkFBcUIsQ0FBQztpQkFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWYsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNoRSxhQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEdBQVMsRUFBRTtZQUNoRSxNQUFNLFVBQVUsR0FBRztnQkFDakIsU0FBUyxFQUFFLENBQUM7Z0JBQ1osZUFBZSxFQUFFLENBQUM7YUFDbkIsQ0FBQztZQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTztpQkFDM0IsSUFBSSxDQUFDLEdBQUcsT0FBTyxxQkFBcUIsQ0FBQztpQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWYsYUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVjdCwgc2hvdWxkIH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IHN1cGVydGVzdCBmcm9tICdzdXBlcnRlc3QnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9zcmMvYXBwJztcbmltcG9ydCBkYiBmcm9tICcuLi8uLi9zcmMvc3RvcmUvZGInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3NyYy9zdG9yZSc7XG5pbXBvcnQgcmVkaXNDbGllbnQgZnJvbSAnLi4vLi4vc3JjL3N0b3JlL3JlZGlzQ2xpZW50JztcblxuY29uc3QgYmFzZVVybCA9ICcvdjEnO1xuc2hvdWxkKCk7XG5cbmRlc2NyaWJlKCdSb3V0ZXMnLCAoKSA9PiB7XG4gIGxldCBzZXJ2ZXI7XG4gIGxldCByZXF1ZXN0O1xuXG4gIC8vIFJlc2V0IGRhdGEgdG8gaW5pdGlhbCBzZWVkIGJlZm9yZSBydW5uaW5nIGFueSBpbnRlZ3JhdGlvbiB0ZXN0c1xuICBjb25zdCB0ZWFyZG93biA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkYi53cml0ZS5xdWVyeSgnREVMRVRFIGZyb20gcHJvZHVjdHMgV0hFUkUgaWQgIT0gMSBBTkQgaWQgIT0gMicpO1xuICAgIGF3YWl0IGRiLndyaXRlLnF1ZXJ5KCdERUxFVEUgZnJvbSBzaG9lcyBXSEVSRSBpZCAhPSAxIEFORCBpZCAhPSAyJyk7XG4gICAgYXdhaXQgZGIud3JpdGUucXVlcnkoJ0RFTEVURSBmcm9tIHJldmlld3MnKTtcbiAgICBhd2FpdCByZWRpc0NsaWVudC5mbHVzaGFsbCgpO1xuICB9O1xuXG4gIGJlZm9yZShhc3luYyAoKSA9PiB7XG4gICAgc2VydmVyID0gYXBwLmxpc3RlbigpO1xuICAgIHJlcXVlc3QgPSBzdXBlcnRlc3QuYWdlbnQoc2VydmVyKTtcbiAgICBhd2FpdCB0ZWFyZG93bigpO1xuICB9KTtcblxuICBhZnRlcihhc3luYyAoKSA9PiB7XG4gICAgc2VydmVyLmNsb3NlKCk7XG4gIH0pO1xuXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgc2lub24ucmVzdG9yZSgpO1xuICB9KTtcblxuICBkZXNjcmliZSgnQ1JFQVRFIC9wcm9kdWN0cy86cHJvZHVjdElkL3Jldmlld3MnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgZXJyb3JzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9ja0Vycm9yTXNnID0gJ01vY2sgZXJyb3IgbWVzc2FnZSc7XG4gICAgICBzaW5vbi5zdHViKHN0b3JlLCAnZ2V0UHJvZHVjdHMnKS5yZWplY3RzKG5ldyBFcnJvcihtb2NrRXJyb3JNc2cpKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAucG9zdChgJHtiYXNlVXJsfS9wcm9kdWN0cy8xL3Jldmlld3NgKVxuICAgICAgICAuZXhwZWN0KDUwMCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lm1lc3NhZ2UpLnRvLmJlLmVxdWFsKCdGYWlsZWQgdG8gc2F2ZSByZXZpZXcuJyk7XG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5lcnJvcikudG8uYmUuZXF1YWwobW9ja0Vycm9yTXNnKTtcbiAgICB9KTtcblxuICAgIGl0KCdyZXR1cm4gNDA0IHdoZW4gbm8gcHJvZHVjdCBpcyBmb3VuZCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFxuICAgICAgICAucG9zdChgJHtiYXNlVXJsfS9wcm9kdWN0cy81L3Jldmlld3NgKVxuICAgICAgICAuZXhwZWN0KDQwNCk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lm1lc3NhZ2UpLnRvLmJlLmVxdWFsKCdQcm9kdWN0IG5vdCBmb3VuZC4nKTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LnN0YXR1c0NvZGUpLnRvLmJlLmVxdWFsKDQwNCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiB0aGUgaWQgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgcmV2aWV3JywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9ja1JldmlldyA9IHtcbiAgICAgICAgcHJvZHVjdElkOiAxLFxuICAgICAgICB0cnVlVG9TaXplU2NvcmU6IDUsXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0XG4gICAgICAgIC5wb3N0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzLzEvcmV2aWV3c2ApXG4gICAgICAgIC5zZW5kKG1vY2tSZXZpZXcpXG4gICAgICAgIC5leHBlY3QoMjAxKTtcblxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkpLnRvLmhhdmUucHJvcGVydHkoJ2lkJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
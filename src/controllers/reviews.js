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
const store_1 = __importDefault(require("../store"));
exports.createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const { trueToSizeScore } = req.body;
    const review = {
        productId,
        trueToSizeScore,
    };
    try {
        const response = yield store_1.default.createReview(review);
        return res.status(201).send({
            id: response.rows[0].id,
        });
    }
    catch (err) {
        return res.status(500).send({
            message: 'Failed to save review.',
            error: err.message,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJldmlld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkI7QUFFaEIsUUFBQSxZQUFZLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDN0MsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDakMsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFckMsTUFBTSxNQUFNLEdBQUc7UUFDYixTQUFTO1FBQ1QsZUFBZTtLQUNoQixDQUFDO0lBRUYsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDeEIsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsT0FBTyxFQUFFLHdCQUF3QjtZQUNqQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXZpZXcgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHJlcS5wYXJhbXM7XG4gIGNvbnN0IHsgdHJ1ZVRvU2l6ZVNjb3JlIH0gPSByZXEuYm9keTtcblxuICBjb25zdCByZXZpZXcgPSB7XG4gICAgcHJvZHVjdElkLFxuICAgIHRydWVUb1NpemVTY29yZSxcbiAgfTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RvcmUuY3JlYXRlUmV2aWV3KHJldmlldyk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoe1xuICAgICAgaWQ6IHJlc3BvbnNlLnJvd3NbMF0uaWQsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7XG4gICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIHNhdmUgcmV2aWV3LicsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn07XG4iXX0=
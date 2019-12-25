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
        productId: Number(productId),
        trueToSizeScore,
    };
    try {
        const productRes = yield store_1.default.getProducts({ id: productId });
        if (!productRes.rows.length) {
            return res.status(404).send({
                statusCode: 404,
                message: 'Product not found.',
            });
        }
        const reviewRes = yield store_1.default.createReview(review);
        return res.status(201).send({
            id: reviewRes.rows[0].id,
        });
    }
    catch (err) {
        return res.status(500).send({
            message: 'Failed to save review.',
            error: err.message,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJldmlld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkI7QUFFaEIsUUFBQSxZQUFZLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDN0MsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDakMsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFckMsTUFBTSxNQUFNLEdBQUc7UUFDYixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM1QixlQUFlO0tBQ2hCLENBQUM7SUFFRixJQUFJO1FBQ0YsTUFBTSxVQUFVLEdBQUcsTUFBTSxlQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxvQkFBb0I7YUFDOUIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxNQUFNLFNBQVMsR0FBRyxNQUFNLGVBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixFQUFFLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ3pCLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ25CLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmV2aWV3ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdElkIH0gPSByZXEucGFyYW1zO1xuICBjb25zdCB7IHRydWVUb1NpemVTY29yZSB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgcmV2aWV3ID0ge1xuICAgIHByb2R1Y3RJZDogTnVtYmVyKHByb2R1Y3RJZCksXG4gICAgdHJ1ZVRvU2l6ZVNjb3JlLFxuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcHJvZHVjdFJlcyA9IGF3YWl0IHN0b3JlLmdldFByb2R1Y3RzKHsgaWQ6IHByb2R1Y3RJZCB9KTtcbiAgICBpZiAoIXByb2R1Y3RSZXMucm93cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7XG4gICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgbWVzc2FnZTogJ1Byb2R1Y3Qgbm90IGZvdW5kLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXZpZXdSZXMgPSBhd2FpdCBzdG9yZS5jcmVhdGVSZXZpZXcocmV2aWV3KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZCh7XG4gICAgICBpZDogcmV2aWV3UmVzLnJvd3NbMF0uaWQsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7XG4gICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIHNhdmUgcmV2aWV3LicsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn07XG4iXX0=
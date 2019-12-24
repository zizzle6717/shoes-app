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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJldmlld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkI7QUFFaEIsUUFBQSxZQUFZLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDN0MsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDakMsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFckMsTUFBTSxNQUFNLEdBQUc7UUFDYixTQUFTO1FBQ1QsZUFBZTtLQUNoQixDQUFDO0lBRUYsSUFBSTtRQUNGLE1BQU0sVUFBVSxHQUFHLE1BQU0sZUFBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsb0JBQW9CO2FBQzlCLENBQUMsQ0FBQztTQUNKO1FBRUQsTUFBTSxTQUFTLEdBQUcsTUFBTSxlQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN6QixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztTQUNuQixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJldmlldyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gcmVxLnBhcmFtcztcbiAgY29uc3QgeyB0cnVlVG9TaXplU2NvcmUgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IHJldmlldyA9IHtcbiAgICBwcm9kdWN0SWQsXG4gICAgdHJ1ZVRvU2l6ZVNjb3JlLFxuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcHJvZHVjdFJlcyA9IGF3YWl0IHN0b3JlLmdldFByb2R1Y3RzKHsgaWQ6IHByb2R1Y3RJZCB9KTtcbiAgICBpZiAoIXByb2R1Y3RSZXMucm93cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7XG4gICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgbWVzc2FnZTogJ1Byb2R1Y3Qgbm90IGZvdW5kLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXZpZXdSZXMgPSBhd2FpdCBzdG9yZS5jcmVhdGVSZXZpZXcocmV2aWV3KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZCh7XG4gICAgICBpZDogcmV2aWV3UmVzLnJvd3NbMF0uaWQsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7XG4gICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIHNhdmUgcmV2aWV3LicsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn07XG4iXX0=
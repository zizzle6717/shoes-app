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
exports.getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield store_1.default.getProducts({});
        return res.send({
            products: response.rows,
        });
    }
    catch (err) {
        return res.status(500).send({
            message: 'Failed to fetch product(s).',
            error: err.message,
        });
    }
});
exports.getProduct = (req, res) => {
    const { productId } = req.params;
    const promises = [];
    const getProductsPromise = store_1.default.getProducts({
        id: productId,
    });
    const getShoesPromise = store_1.default.getShoes({
        productId,
    });
    const getReviewssPromise = store_1.default.getReviews({
        productId,
    });
    promises.push(getProductsPromise, getShoesPromise, getReviewssPromise);
    return Promise.all(promises)
        .then(([productRes, shoesRes, reviewsRes]) => {
        if (!productRes.rows.length) {
            return res.status(404).send({
                statusCode: 404,
                message: 'Product not found.',
            });
        }
        const product = productRes.rows[0];
        product.shoe = shoesRes.rows[0];
        product.reviews = reviewsRes.rows;
        return res.send(product);
    })
        .catch((err) => res.status(500).send({
        message: 'Failed to fetch product.',
        error: err.message,
    }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUVoQixRQUFBLFdBQVcsR0FBRyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM1QyxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztZQUNkLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN4QixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztTQUNuQixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDakMsTUFBTSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztJQUVwQyxNQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUM7UUFDM0MsRUFBRSxFQUFFLFNBQVM7S0FDZCxDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3JDLFNBQVM7S0FDVixDQUFDLENBQUM7SUFFSCxNQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxVQUFVLENBQUM7UUFDMUMsU0FBUztLQUNWLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFdkUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLG9CQUFvQjthQUM5QixDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUVsQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQyxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztLQUNuQixDQUFDLENBQUMsQ0FBQztBQUNSLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RvcmUuZ2V0UHJvZHVjdHMoe30pO1xuXG4gICAgcmV0dXJuIHJlcy5zZW5kKHtcbiAgICAgIHByb2R1Y3RzOiByZXNwb25zZS5yb3dzLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBwcm9kdWN0KHMpLicsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0ID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdElkIH0gPSByZXEucGFyYW1zO1xuICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxhbnk+W10gPSBbXTtcblxuICBjb25zdCBnZXRQcm9kdWN0c1Byb21pc2UgPSBzdG9yZS5nZXRQcm9kdWN0cyh7XG4gICAgaWQ6IHByb2R1Y3RJZCxcbiAgfSk7XG5cbiAgY29uc3QgZ2V0U2hvZXNQcm9taXNlID0gc3RvcmUuZ2V0U2hvZXMoe1xuICAgIHByb2R1Y3RJZCxcbiAgfSk7XG5cbiAgY29uc3QgZ2V0UmV2aWV3c3NQcm9taXNlID0gc3RvcmUuZ2V0UmV2aWV3cyh7XG4gICAgcHJvZHVjdElkLFxuICB9KTtcblxuICBwcm9taXNlcy5wdXNoKGdldFByb2R1Y3RzUHJvbWlzZSwgZ2V0U2hvZXNQcm9taXNlLCBnZXRSZXZpZXdzc1Byb21pc2UpO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAudGhlbigoW3Byb2R1Y3RSZXMsIHNob2VzUmVzLCByZXZpZXdzUmVzXSkgPT4ge1xuICAgICAgaWYgKCFwcm9kdWN0UmVzLnJvd3MubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7XG4gICAgICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgICAgIG1lc3NhZ2U6ICdQcm9kdWN0IG5vdCBmb3VuZC4nLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RSZXMucm93c1swXTtcbiAgICAgIHByb2R1Y3Quc2hvZSA9IHNob2VzUmVzLnJvd3NbMF07XG4gICAgICBwcm9kdWN0LnJldmlld3MgPSByZXZpZXdzUmVzLnJvd3M7XG5cbiAgICAgIHJldHVybiByZXMuc2VuZChwcm9kdWN0KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7XG4gICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGZldGNoIHByb2R1Y3QuJyxcbiAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcbiAgICB9KSk7XG59O1xuIl19
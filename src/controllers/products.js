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
            message: 'Failed to fetch products.',
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
        const trueToSizeCalculation = reviewsRes.rows
            .map((row) => Number(row.trueToSizeScore))
            .reduce((cur, acc) => cur + acc, 0) / reviewsRes.rows.length;
        const product = productRes.rows[0];
        product.shoe = shoesRes.rows[0];
        product.reviews = reviewsRes.rows;
        product.trueToSizeCalculation = trueToSizeCalculation;
        return res.send(product);
    })
        .catch((err) => res.status(500).send({
        message: 'Failed to fetch product.',
        error: err.message,
    }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUVoQixRQUFBLFdBQVcsR0FBRyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM1QyxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztZQUNkLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN4QixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztTQUNuQixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDakMsTUFBTSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztJQUVwQyxNQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUM7UUFDM0MsRUFBRSxFQUFFLFNBQVM7S0FDZCxDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3JDLFNBQVM7S0FDVixDQUFDLENBQUM7SUFFSCxNQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxVQUFVLENBQUM7UUFDMUMsU0FBUztLQUNWLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFdkUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLG9CQUFvQjthQUM5QixDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0scUJBQXFCLEdBQUcsVUFBVSxDQUFDLElBQUk7YUFDMUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3pDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFL0QsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztRQUV0RCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQyxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztLQUNuQixDQUFDLENBQUMsQ0FBQztBQUNSLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RvcmUuZ2V0UHJvZHVjdHMoe30pO1xuXG4gICAgcmV0dXJuIHJlcy5zZW5kKHtcbiAgICAgIHByb2R1Y3RzOiByZXNwb25zZS5yb3dzLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBwcm9kdWN0cy4nLFxuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdCA9IChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gcmVxLnBhcmFtcztcbiAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8YW55PltdID0gW107XG5cbiAgY29uc3QgZ2V0UHJvZHVjdHNQcm9taXNlID0gc3RvcmUuZ2V0UHJvZHVjdHMoe1xuICAgIGlkOiBwcm9kdWN0SWQsXG4gIH0pO1xuXG4gIGNvbnN0IGdldFNob2VzUHJvbWlzZSA9IHN0b3JlLmdldFNob2VzKHtcbiAgICBwcm9kdWN0SWQsXG4gIH0pO1xuXG4gIGNvbnN0IGdldFJldmlld3NzUHJvbWlzZSA9IHN0b3JlLmdldFJldmlld3Moe1xuICAgIHByb2R1Y3RJZCxcbiAgfSk7XG5cbiAgcHJvbWlzZXMucHVzaChnZXRQcm9kdWN0c1Byb21pc2UsIGdldFNob2VzUHJvbWlzZSwgZ2V0UmV2aWV3c3NQcm9taXNlKTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgLnRoZW4oKFtwcm9kdWN0UmVzLCBzaG9lc1JlcywgcmV2aWV3c1Jlc10pID0+IHtcbiAgICAgIGlmICghcHJvZHVjdFJlcy5yb3dzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoe1xuICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgICBtZXNzYWdlOiAnUHJvZHVjdCBub3QgZm91bmQuJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRydWVUb1NpemVDYWxjdWxhdGlvbiA9IHJldmlld3NSZXMucm93c1xuICAgICAgICAubWFwKChyb3cpID0+IE51bWJlcihyb3cudHJ1ZVRvU2l6ZVNjb3JlKSlcbiAgICAgICAgLnJlZHVjZSgoY3VyLCBhY2MpID0+IGN1ciArIGFjYywgMCkgLyByZXZpZXdzUmVzLnJvd3MubGVuZ3RoO1xuXG4gICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdFJlcy5yb3dzWzBdO1xuICAgICAgcHJvZHVjdC5zaG9lID0gc2hvZXNSZXMucm93c1swXTtcbiAgICAgIHByb2R1Y3QucmV2aWV3cyA9IHJldmlld3NSZXMucm93cztcbiAgICAgIHByb2R1Y3QudHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uID0gdHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uO1xuXG4gICAgICByZXR1cm4gcmVzLnNlbmQocHJvZHVjdCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBwcm9kdWN0LicsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgfSkpO1xufTtcbiJdfQ==
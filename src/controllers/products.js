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
const Cache_1 = __importDefault(require("../store/Cache"));
const calculateTts_1 = __importDefault(require("../utilities/calculateTts"));
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
        let trueToSizeCalculation;
        return Cache_1.default.getTrueToSizeCalculation(productId)
            .then((ttsCalc) => {
            trueToSizeCalculation = ttsCalc;
            if (!trueToSizeCalculation) {
                trueToSizeCalculation = calculateTts_1.default(reviewsRes.rows);
            }
            const product = productRes.rows[0];
            product.shoe = shoesRes.rows[0]
                ? {
                    id: shoesRes.rows[0].id,
                    name: shoesRes.rows[0].name,
                }
                : {};
            product.reviews = reviewsRes.rows.map((row) => ({ id: row.id, trueToSizeScore: row.trueToSizeScore }));
            product.trueToSizeCalculation = trueToSizeCalculation;
            return res.send(product);
        });
    })
        .catch((err) => res.status(500).send({
        message: 'Failed to fetch product.',
        error: err.message,
    }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUM3QiwyREFBbUM7QUFDbkMsNkVBQXFEO0FBRXhDLFFBQUEsV0FBVyxHQUFHLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzVDLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0MsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ2QsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1NBQ3hCLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sRUFBRSwyQkFBMkI7WUFDcEMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ25CLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFVyxRQUFBLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNyQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxNQUFNLFFBQVEsR0FBbUIsRUFBRSxDQUFDO0lBRXBDLE1BQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQztRQUMzQyxFQUFFLEVBQUUsU0FBUztLQUNkLENBQUMsQ0FBQztJQUVILE1BQU0sZUFBZSxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUM7UUFDckMsU0FBUztLQUNWLENBQUMsQ0FBQztJQUVILE1BQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUV2RSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1NBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsb0JBQW9CO2FBQzlCLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxxQkFBcUIsQ0FBQztRQUMxQixPQUFPLGVBQUssQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUM7YUFDN0MsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEIscUJBQXFCLEdBQUcsT0FBTyxDQUFDO1lBRWhDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDMUIscUJBQXFCLEdBQUcsc0JBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkQ7WUFFRCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztvQkFDQSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN2QixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUM1QjtnQkFDRCxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1AsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztZQUV0RCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25DLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO0tBQ25CLENBQUMsQ0FBQyxDQUFDO0FBQ1IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBDYWNoZSBmcm9tICcuLi9zdG9yZS9DYWNoZSc7XG5pbXBvcnQgY2FsY3VsYXRlVHRzIGZyb20gJy4uL3V0aWxpdGllcy9jYWxjdWxhdGVUdHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0b3JlLmdldFByb2R1Y3RzKHt9KTtcblxuICAgIHJldHVybiByZXMuc2VuZCh7XG4gICAgICBwcm9kdWN0czogcmVzcG9uc2Uucm93cyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdHMuJyxcbiAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3QgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHJlcS5wYXJhbXM7XG4gIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuXG4gIGNvbnN0IGdldFByb2R1Y3RzUHJvbWlzZSA9IHN0b3JlLmdldFByb2R1Y3RzKHtcbiAgICBpZDogcHJvZHVjdElkLFxuICB9KTtcblxuICBjb25zdCBnZXRTaG9lc1Byb21pc2UgPSBzdG9yZS5nZXRTaG9lcyh7XG4gICAgcHJvZHVjdElkLFxuICB9KTtcblxuICBjb25zdCBnZXRSZXZpZXdzc1Byb21pc2UgPSBzdG9yZS5nZXRSZXZpZXdzKHtcbiAgICBwcm9kdWN0SWQsXG4gIH0pO1xuXG4gIHByb21pc2VzLnB1c2goZ2V0UHJvZHVjdHNQcm9taXNlLCBnZXRTaG9lc1Byb21pc2UsIGdldFJldmlld3NzUHJvbWlzZSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIC50aGVuKChbcHJvZHVjdFJlcywgc2hvZXNSZXMsIHJldmlld3NSZXNdKSA9PiB7XG4gICAgICBpZiAoIXByb2R1Y3RSZXMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgbWVzc2FnZTogJ1Byb2R1Y3Qgbm90IGZvdW5kLicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBsZXQgdHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uO1xuICAgICAgcmV0dXJuIENhY2hlLmdldFRydWVUb1NpemVDYWxjdWxhdGlvbihwcm9kdWN0SWQpXG4gICAgICAgIC50aGVuKCh0dHNDYWxjKSA9PiB7XG4gICAgICAgICAgdHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uID0gdHRzQ2FsYztcblxuICAgICAgICAgIGlmICghdHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uKSB7XG4gICAgICAgICAgICB0cnVlVG9TaXplQ2FsY3VsYXRpb24gPSBjYWxjdWxhdGVUdHMocmV2aWV3c1Jlcy5yb3dzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdFJlcy5yb3dzWzBdO1xuICAgICAgICAgIHByb2R1Y3Quc2hvZSA9IHNob2VzUmVzLnJvd3NbMF1cbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBpZDogc2hvZXNSZXMucm93c1swXS5pZCxcbiAgICAgICAgICAgICAgbmFtZTogc2hvZXNSZXMucm93c1swXS5uYW1lLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgICBwcm9kdWN0LnJldmlld3MgPSByZXZpZXdzUmVzLnJvd3MubWFwKChyb3cpID0+ICh7IGlkOiByb3cuaWQsIHRydWVUb1NpemVTY29yZTogcm93LnRydWVUb1NpemVTY29yZSB9KSk7XG4gICAgICAgICAgcHJvZHVjdC50cnVlVG9TaXplQ2FsY3VsYXRpb24gPSB0cnVlVG9TaXplQ2FsY3VsYXRpb247XG5cbiAgICAgICAgICByZXR1cm4gcmVzLnNlbmQocHJvZHVjdCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdC4nLFxuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgIH0pKTtcbn07XG4iXX0=
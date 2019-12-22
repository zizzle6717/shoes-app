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
    const response = yield store_1.default.getProducts({});
    return res.send({
        products: response.rows,
    });
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
                message: 'Product not found.'
            });
        }
        const product = productRes.rows[0];
        product.shoe = shoesRes.rows[0];
        product.reviews = reviewsRes.rows;
        return res.send(product);
    })
        .catch(err => res.status(500).send({
        message: 'Failed to fetch product.',
        error: err.message,
    }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUVoQixRQUFBLFdBQVcsR0FBRyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFN0MsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2QsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFBO0FBRVksUUFBQSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDakMsTUFBTSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztJQUVwQyxNQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUM7UUFDM0MsRUFBRSxFQUFFLFNBQVM7S0FDZCxDQUFDLENBQUE7SUFFRixNQUFNLGVBQWUsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3JDLFNBQVM7S0FDVixDQUFDLENBQUM7SUFFSCxNQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxVQUFVLENBQUM7UUFDMUMsU0FBUztLQUNWLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFdkUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLG9CQUFvQjthQUM5QixDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUVsQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakMsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87S0FDbkIsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdG9yZS5nZXRQcm9kdWN0cyh7fSk7XG5cbiAgcmV0dXJuIHJlcy5zZW5kKHtcbiAgICBwcm9kdWN0czogcmVzcG9uc2Uucm93cyxcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0ID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdElkIH0gPSByZXEucGFyYW1zO1xuICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxhbnk+W10gPSBbXTtcblxuICBjb25zdCBnZXRQcm9kdWN0c1Byb21pc2UgPSBzdG9yZS5nZXRQcm9kdWN0cyh7XG4gICAgaWQ6IHByb2R1Y3RJZCxcbiAgfSlcblxuICBjb25zdCBnZXRTaG9lc1Byb21pc2UgPSBzdG9yZS5nZXRTaG9lcyh7XG4gICAgcHJvZHVjdElkLFxuICB9KTtcblxuICBjb25zdCBnZXRSZXZpZXdzc1Byb21pc2UgPSBzdG9yZS5nZXRSZXZpZXdzKHtcbiAgICBwcm9kdWN0SWQsXG4gIH0pO1xuXG4gIHByb21pc2VzLnB1c2goZ2V0UHJvZHVjdHNQcm9taXNlLCBnZXRTaG9lc1Byb21pc2UsIGdldFJldmlld3NzUHJvbWlzZSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIC50aGVuKChbcHJvZHVjdFJlcywgc2hvZXNSZXMsIHJldmlld3NSZXNdKSA9PiB7XG4gICAgICBpZiAoIXByb2R1Y3RSZXMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgbWVzc2FnZTogJ1Byb2R1Y3Qgbm90IGZvdW5kLidcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0UmVzLnJvd3NbMF07XG4gICAgICBwcm9kdWN0LnNob2UgPSBzaG9lc1Jlcy5yb3dzWzBdO1xuICAgICAgcHJvZHVjdC5yZXZpZXdzID0gcmV2aWV3c1Jlcy5yb3dzO1xuXG4gICAgICByZXR1cm4gcmVzLnNlbmQocHJvZHVjdCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdC4nLFxuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgIH0pKTtcbn0iXX0=
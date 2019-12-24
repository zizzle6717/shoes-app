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
        product.shoe = shoesRes.rows[0]
            ? {
                id: shoesRes.rows[0].id,
                name: shoesRes.rows[0].name,
            }
            : {};
        product.reviews = reviewsRes.rows.map((row) => ({ id: row.id, trueToSizeScore: row.trueToSizeScore }));
        product.trueToSizeCalculation = trueToSizeCalculation;
        return res.send(product);
    })
        .catch((err) => res.status(500).send({
        message: 'Failed to fetch product.',
        error: err.message,
    }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUVoQixRQUFBLFdBQVcsR0FBRyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM1QyxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztZQUNkLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN4QixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztTQUNuQixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDakMsTUFBTSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztJQUVwQyxNQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUM7UUFDM0MsRUFBRSxFQUFFLFNBQVM7S0FDZCxDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3JDLFNBQVM7S0FDVixDQUFDLENBQUM7SUFFSCxNQUFNLGtCQUFrQixHQUFHLGVBQUssQ0FBQyxVQUFVLENBQUM7UUFDMUMsU0FBUztLQUNWLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFdkUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLG9CQUFvQjthQUM5QixDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0scUJBQXFCLEdBQUcsVUFBVSxDQUFDLElBQUk7YUFDMUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3pDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFL0QsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQztnQkFDQSxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQzVCO1lBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RyxPQUFPLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFFdEQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkMsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87S0FDbkIsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0b3JlLmdldFByb2R1Y3RzKHt9KTtcblxuICAgIHJldHVybiByZXMuc2VuZCh7XG4gICAgICBwcm9kdWN0czogcmVzcG9uc2Uucm93cyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdHMuJyxcbiAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3QgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHJlcS5wYXJhbXM7XG4gIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuXG4gIGNvbnN0IGdldFByb2R1Y3RzUHJvbWlzZSA9IHN0b3JlLmdldFByb2R1Y3RzKHtcbiAgICBpZDogcHJvZHVjdElkLFxuICB9KTtcblxuICBjb25zdCBnZXRTaG9lc1Byb21pc2UgPSBzdG9yZS5nZXRTaG9lcyh7XG4gICAgcHJvZHVjdElkLFxuICB9KTtcblxuICBjb25zdCBnZXRSZXZpZXdzc1Byb21pc2UgPSBzdG9yZS5nZXRSZXZpZXdzKHtcbiAgICBwcm9kdWN0SWQsXG4gIH0pO1xuXG4gIHByb21pc2VzLnB1c2goZ2V0UHJvZHVjdHNQcm9taXNlLCBnZXRTaG9lc1Byb21pc2UsIGdldFJldmlld3NzUHJvbWlzZSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIC50aGVuKChbcHJvZHVjdFJlcywgc2hvZXNSZXMsIHJldmlld3NSZXNdKSA9PiB7XG4gICAgICBpZiAoIXByb2R1Y3RSZXMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgbWVzc2FnZTogJ1Byb2R1Y3Qgbm90IGZvdW5kLicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0cnVlVG9TaXplQ2FsY3VsYXRpb24gPSByZXZpZXdzUmVzLnJvd3NcbiAgICAgICAgLm1hcCgocm93KSA9PiBOdW1iZXIocm93LnRydWVUb1NpemVTY29yZSkpXG4gICAgICAgIC5yZWR1Y2UoKGN1ciwgYWNjKSA9PiBjdXIgKyBhY2MsIDApIC8gcmV2aWV3c1Jlcy5yb3dzLmxlbmd0aDtcblxuICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RSZXMucm93c1swXTtcbiAgICAgIHByb2R1Y3Quc2hvZSA9IHNob2VzUmVzLnJvd3NbMF1cbiAgICAgICAgPyB7XG4gICAgICAgICAgaWQ6IHNob2VzUmVzLnJvd3NbMF0uaWQsXG4gICAgICAgICAgbmFtZTogc2hvZXNSZXMucm93c1swXS5uYW1lLFxuICAgICAgICB9XG4gICAgICAgIDoge307XG4gICAgICBwcm9kdWN0LnJldmlld3MgPSByZXZpZXdzUmVzLnJvd3MubWFwKChyb3cpID0+ICh7IGlkOiByb3cuaWQsIHRydWVUb1NpemVTY29yZTogcm93LnRydWVUb1NpemVTY29yZSB9KSk7XG4gICAgICBwcm9kdWN0LnRydWVUb1NpemVDYWxjdWxhdGlvbiA9IHRydWVUb1NpemVDYWxjdWxhdGlvbjtcblxuICAgICAgcmV0dXJuIHJlcy5zZW5kKHByb2R1Y3QpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdC4nLFxuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgIH0pKTtcbn07XG4iXX0=
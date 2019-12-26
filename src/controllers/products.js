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
        return res.status(200).send({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUM3QiwyREFBbUM7QUFDbkMsNkVBQXFEO0FBRXhDLFFBQUEsV0FBVyxHQUFHLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzVDLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0MsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUk7U0FDeEIsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUEsQ0FBQztBQUVXLFFBQUEsVUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDLE1BQU0sUUFBUSxHQUFtQixFQUFFLENBQUM7SUFFcEMsTUFBTSxrQkFBa0IsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDO1FBQzNDLEVBQUUsRUFBRSxTQUFTO0tBQ2QsQ0FBQyxDQUFDO0lBRUgsTUFBTSxlQUFlLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxrQkFBa0IsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUFDO1FBQzFDLFNBQVM7S0FDVixDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBRXZFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDekIsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxvQkFBb0I7YUFDOUIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLHFCQUFxQixDQUFDO1FBQzFCLE9BQU8sZUFBSyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQzthQUM3QyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQixxQkFBcUIsR0FBRyxPQUFPLENBQUM7WUFFaEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUMxQixxQkFBcUIsR0FBRyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RDtZQUVELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDO29CQUNBLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3ZCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQzVCO2dCQUNELENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDUCxPQUFPLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkcsT0FBTyxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1lBRXRELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkMsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87S0FDbkIsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IENhY2hlIGZyb20gJy4uL3N0b3JlL0NhY2hlJztcbmltcG9ydCBjYWxjdWxhdGVUdHMgZnJvbSAnLi4vdXRpbGl0aWVzL2NhbGN1bGF0ZVR0cyc7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RvcmUuZ2V0UHJvZHVjdHMoe30pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgIHByb2R1Y3RzOiByZXNwb25zZS5yb3dzLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBwcm9kdWN0cy4nLFxuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdCA9IChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gcmVxLnBhcmFtcztcbiAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8YW55PltdID0gW107XG5cbiAgY29uc3QgZ2V0UHJvZHVjdHNQcm9taXNlID0gc3RvcmUuZ2V0UHJvZHVjdHMoe1xuICAgIGlkOiBwcm9kdWN0SWQsXG4gIH0pO1xuXG4gIGNvbnN0IGdldFNob2VzUHJvbWlzZSA9IHN0b3JlLmdldFNob2VzKHtcbiAgICBwcm9kdWN0SWQsXG4gIH0pO1xuXG4gIGNvbnN0IGdldFJldmlld3NzUHJvbWlzZSA9IHN0b3JlLmdldFJldmlld3Moe1xuICAgIHByb2R1Y3RJZCxcbiAgfSk7XG5cbiAgcHJvbWlzZXMucHVzaChnZXRQcm9kdWN0c1Byb21pc2UsIGdldFNob2VzUHJvbWlzZSwgZ2V0UmV2aWV3c3NQcm9taXNlKTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgLnRoZW4oKFtwcm9kdWN0UmVzLCBzaG9lc1JlcywgcmV2aWV3c1Jlc10pID0+IHtcbiAgICAgIGlmICghcHJvZHVjdFJlcy5yb3dzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoe1xuICAgICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgICBtZXNzYWdlOiAnUHJvZHVjdCBub3QgZm91bmQuJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxldCB0cnVlVG9TaXplQ2FsY3VsYXRpb247XG4gICAgICByZXR1cm4gQ2FjaGUuZ2V0VHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uKHByb2R1Y3RJZClcbiAgICAgICAgLnRoZW4oKHR0c0NhbGMpID0+IHtcbiAgICAgICAgICB0cnVlVG9TaXplQ2FsY3VsYXRpb24gPSB0dHNDYWxjO1xuXG4gICAgICAgICAgaWYgKCF0cnVlVG9TaXplQ2FsY3VsYXRpb24pIHtcbiAgICAgICAgICAgIHRydWVUb1NpemVDYWxjdWxhdGlvbiA9IGNhbGN1bGF0ZVR0cyhyZXZpZXdzUmVzLnJvd3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0UmVzLnJvd3NbMF07XG4gICAgICAgICAgcHJvZHVjdC5zaG9lID0gc2hvZXNSZXMucm93c1swXVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGlkOiBzaG9lc1Jlcy5yb3dzWzBdLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBzaG9lc1Jlcy5yb3dzWzBdLm5hbWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9O1xuICAgICAgICAgIHByb2R1Y3QucmV2aWV3cyA9IHJldmlld3NSZXMucm93cy5tYXAoKHJvdykgPT4gKHsgaWQ6IHJvdy5pZCwgdHJ1ZVRvU2l6ZVNjb3JlOiByb3cudHJ1ZVRvU2l6ZVNjb3JlIH0pKTtcbiAgICAgICAgICBwcm9kdWN0LnRydWVUb1NpemVDYWxjdWxhdGlvbiA9IHRydWVUb1NpemVDYWxjdWxhdGlvbjtcblxuICAgICAgICAgIHJldHVybiByZXMuc2VuZChwcm9kdWN0KTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBwcm9kdWN0LicsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgfSkpO1xufTtcbiJdfQ==
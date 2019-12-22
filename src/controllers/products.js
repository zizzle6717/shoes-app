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
exports.getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const response = yield store_1.default.getProducts({
        id: productId,
    });
    return res.send(response.rows[0]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUVoQixRQUFBLFdBQVcsR0FBRyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFN0MsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2QsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFBO0FBRVksUUFBQSxVQUFVLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDM0MsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLEVBQUUsRUFBRSxTQUFTO0tBQ2QsQ0FBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0b3JlLmdldFByb2R1Y3RzKHt9KTtcblxuICByZXR1cm4gcmVzLnNlbmQoe1xuICAgIHByb2R1Y3RzOiByZXNwb25zZS5yb3dzLFxuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHJlcS5wYXJhbXM7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdG9yZS5nZXRQcm9kdWN0cyh7XG4gICAgaWQ6IHByb2R1Y3RJZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy5zZW5kKHJlc3BvbnNlLnJvd3NbMF0pO1xufSJdfQ==
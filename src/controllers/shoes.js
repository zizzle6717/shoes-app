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
exports.getShoes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield store_1.default.getShoes({});
    return res.send({
        shoes: response.rows,
    });
});
exports.getShoe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shoeId } = req.params;
    const response = yield store_1.default.getShoes({
        id: shoeId,
    });
    return res.send(response.rows[0]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUVoQixRQUFBLFFBQVEsR0FBRyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6QyxNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFMUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJO0tBQ3JCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFBO0FBRVksUUFBQSxPQUFPLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFOUIsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3BDLEVBQUUsRUFBRSxNQUFNO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTaG9lcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0b3JlLmdldFNob2VzKHt9KTtcblxuICByZXR1cm4gcmVzLnNlbmQoe1xuICAgIHNob2VzOiByZXNwb25zZS5yb3dzLFxuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNob2UgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBzaG9lSWQgfSA9IHJlcS5wYXJhbXM7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdG9yZS5nZXRTaG9lcyh7XG4gICAgaWQ6IHNob2VJZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy5zZW5kKHJlc3BvbnNlLnJvd3NbMF0pO1xufSJdfQ==
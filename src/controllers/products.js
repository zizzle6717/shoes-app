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
    return res.send(response.rows);
});
exports.getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const response = yield store_1.default.getProducts({
        id: productId,
    });
    return res.send(response.rows[0]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUVoQixRQUFBLFdBQVcsR0FBRyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFN0MsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUEsQ0FBQTtBQUVZLFFBQUEsVUFBVSxHQUFHLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRWpDLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBSyxDQUFDLFdBQVcsQ0FBQztRQUN2QyxFQUFFLEVBQUUsU0FBUztLQUNkLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdG9yZS5nZXRQcm9kdWN0cyh7fSk7XG5cbiAgcmV0dXJuIHJlcy5zZW5kKHJlc3BvbnNlLnJvd3MpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gcmVxLnBhcmFtcztcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0b3JlLmdldFByb2R1Y3RzKHtcbiAgICBpZDogcHJvZHVjdElkLFxuICB9KTtcblxuICByZXR1cm4gcmVzLnNlbmQocmVzcG9uc2Uucm93c1swXSk7XG59Il19
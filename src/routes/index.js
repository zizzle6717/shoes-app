"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRouter_1 = __importDefault(require("./productsRouter"));
const reviewsRouter_1 = __importDefault(require("./reviewsRouter"));
const shoesRouter_1 = __importDefault(require("./shoesRouter"));
const router = express_1.default.Router();
router.use('/products', productsRouter_1.default);
router.use('/products', reviewsRouter_1.default);
router.use('/shoes', shoesRouter_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixzRUFBOEM7QUFDOUMsb0VBQTRDO0FBQzVDLGdFQUF3QztBQUV4QyxNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHdCQUFjLENBQUMsQ0FBQztBQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx1QkFBYSxDQUFDLENBQUM7QUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUscUJBQVcsQ0FBQyxDQUFDO0FBRWxDLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHByb2R1Y3RzUm91dGVyIGZyb20gJy4vcHJvZHVjdHNSb3V0ZXInO1xuaW1wb3J0IHJldmlld3NSb3V0ZXIgZnJvbSAnLi9yZXZpZXdzUm91dGVyJztcbmltcG9ydCBzaG9lc1JvdXRlciBmcm9tICcuL3Nob2VzUm91dGVyJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnVzZSgnL3Byb2R1Y3RzJywgcHJvZHVjdHNSb3V0ZXIpO1xucm91dGVyLnVzZSgnL3Byb2R1Y3RzJywgcmV2aWV3c1JvdXRlcik7XG5yb3V0ZXIudXNlKCcvc2hvZXMnLCBzaG9lc1JvdXRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
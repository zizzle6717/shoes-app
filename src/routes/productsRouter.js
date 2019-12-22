"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../controllers/products");
const router = express_1.default.Router();
router.get('/', products_1.getProducts);
router.get('/:productId', products_1.getProduct);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHNSb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0c1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixzREFHaUM7QUFFakMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxzQkFBVyxDQUFDLENBQUM7QUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUscUJBQVUsQ0FBQyxDQUFDO0FBRXRDLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvZHVjdCxcbiAgZ2V0UHJvZHVjdHMsXG59IGZyb20gJy4uL2NvbnRyb2xsZXJzL3Byb2R1Y3RzJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldCgnLycsIGdldFByb2R1Y3RzKTtcbnJvdXRlci5nZXQoJy86cHJvZHVjdElkJywgZ2V0UHJvZHVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==
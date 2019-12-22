"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRouter_1 = __importDefault(require("./productsRouter"));
const shoesRouter_1 = __importDefault(require("./shoesRouter"));
const router = express_1.default.Router();
router.use('/products', productsRouter_1.default);
router.use('/shoes', shoesRouter_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixzRUFBOEM7QUFDOUMsZ0VBQXdDO0FBRXhDLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsd0JBQWMsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHFCQUFXLENBQUMsQ0FBQztBQUVsQyxrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwcm9kdWN0c1JvdXRlciBmcm9tICcuL3Byb2R1Y3RzUm91dGVyJztcbmltcG9ydCBzaG9lc1JvdXRlciBmcm9tICcuL3Nob2VzUm91dGVyJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnVzZSgnL3Byb2R1Y3RzJywgcHJvZHVjdHNSb3V0ZXIpO1xucm91dGVyLnVzZSgnL3Nob2VzJywgc2hvZXNSb3V0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=
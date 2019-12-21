"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shoes_1 = require("../controllers/shoes");
const router = express_1.default.Router();
router.get('/reviews/:reviewId', shoes_1.createShoeReview);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvZXNSb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9lc1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixnREFFOEI7QUFFOUIsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLHdCQUFnQixDQUFDLENBQUM7QUFFbkQsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1xuICBjcmVhdGVTaG9lUmV2aWV3LFxufSBmcm9tICcuLi9jb250cm9sbGVycy9zaG9lcyc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy9yZXZpZXdzLzpyZXZpZXdJZCcsIGNyZWF0ZVNob2VSZXZpZXcpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shoes_1 = require("../controllers/shoes");
const router = express_1.default.Router();
router.get('', shoes_1.getShoes);
router.get('/:shoeId', shoes_1.getShoe);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvZXNSb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9lc1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixnREFHOEI7QUFFOUIsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxnQkFBUSxDQUFDLENBQUM7QUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZUFBTyxDQUFDLENBQUM7QUFFaEMsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1xuICBnZXRTaG9lLFxuICBnZXRTaG9lcyxcbn0gZnJvbSAnLi4vY29udHJvbGxlcnMvc2hvZXMnO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcnLCBnZXRTaG9lcyk7XG5yb3V0ZXIuZ2V0KCcvOnNob2VJZCcsIGdldFNob2UpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=
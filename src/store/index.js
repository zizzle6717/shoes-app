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
const db_1 = __importDefault(require("./db"));
const Cache_1 = __importDefault(require("./Cache"));
const queries_1 = require("./queries");
class Store {
    constructor(conn) {
        this.getProducts = (conditions) => __awaiter(this, void 0, void 0, function* () {
            let product;
            if (conditions.productId) {
                product = yield Cache_1.default.getProduct(conditions.productId);
            }
            return product || this.db.read.query(queries_1.getProductsQuery(conditions));
        });
        this.getShoes = (conditions) => __awaiter(this, void 0, void 0, function* () {
            let shoe;
            if (conditions.shoeId) {
                shoe = yield Cache_1.default.getShoe(conditions.shoeId);
            }
            return shoe || this.db.read.query(queries_1.getShoesQuery(conditions));
        });
        this.getReviews = (conditions) => this.db.read.query(queries_1.getReviewsQuery(conditions));
        this.createReview = (review) => this.db.write.query(queries_1.createReviewQuery(review));
        this.db = conn;
    }
}
exports.default = new Store(db_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFzQjtBQUN0QixvREFBNEI7QUFDNUIsdUNBS21CO0FBRW5CLE1BQU0sS0FBSztJQUdULFlBQVksSUFBSTtRQUloQixnQkFBVyxHQUFHLENBQU8sVUFBVSxFQUFFLEVBQUU7WUFDakMsSUFBSSxPQUFPLENBQUM7WUFDWixJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxNQUFNLGVBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLDBCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFBLENBQUE7UUFFRCxhQUFRLEdBQUcsQ0FBTyxVQUFVLEVBQUUsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQztZQUNULElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxHQUFHLE1BQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7WUFDRCxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQSxDQUFBO1FBRUQsZUFBVSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBRTVFLGlCQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQywyQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBckJ4RSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNqQixDQUFDO0NBcUJGO0FBRUQsa0JBQWUsSUFBSSxLQUFLLENBQUMsWUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi9DYWNoZSc7XG5pbXBvcnQge1xuICBnZXRQcm9kdWN0c1F1ZXJ5LFxuICBnZXRTaG9lc1F1ZXJ5LFxuICBnZXRSZXZpZXdzUXVlcnksXG4gIGNyZWF0ZVJldmlld1F1ZXJ5LFxufSBmcm9tICcuL3F1ZXJpZXMnO1xuXG5jbGFzcyBTdG9yZSB7XG4gIGRiO1xuXG4gIGNvbnN0cnVjdG9yKGNvbm4pIHtcbiAgICB0aGlzLmRiID0gY29ubjtcbiAgfVxuXG4gIGdldFByb2R1Y3RzID0gYXN5bmMgKGNvbmRpdGlvbnMpID0+IHtcbiAgICBsZXQgcHJvZHVjdDtcbiAgICBpZiAoY29uZGl0aW9ucy5wcm9kdWN0SWQpIHtcbiAgICAgIHByb2R1Y3QgPSBhd2FpdCBDYWNoZS5nZXRQcm9kdWN0KGNvbmRpdGlvbnMucHJvZHVjdElkKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2R1Y3QgfHwgdGhpcy5kYi5yZWFkLnF1ZXJ5KGdldFByb2R1Y3RzUXVlcnkoY29uZGl0aW9ucykpO1xuICB9XG5cbiAgZ2V0U2hvZXMgPSBhc3luYyAoY29uZGl0aW9ucykgPT4ge1xuICAgIGxldCBzaG9lO1xuICAgIGlmIChjb25kaXRpb25zLnNob2VJZCkge1xuICAgICAgc2hvZSA9IGF3YWl0IENhY2hlLmdldFNob2UoY29uZGl0aW9ucy5zaG9lSWQpO1xuICAgIH1cbiAgICByZXR1cm4gc2hvZSB8fCB0aGlzLmRiLnJlYWQucXVlcnkoZ2V0U2hvZXNRdWVyeShjb25kaXRpb25zKSk7XG4gIH1cblxuICBnZXRSZXZpZXdzID0gKGNvbmRpdGlvbnMpID0+IHRoaXMuZGIucmVhZC5xdWVyeShnZXRSZXZpZXdzUXVlcnkoY29uZGl0aW9ucykpXG5cbiAgY3JlYXRlUmV2aWV3ID0gKHJldmlldykgPT4gdGhpcy5kYi53cml0ZS5xdWVyeShjcmVhdGVSZXZpZXdRdWVyeShyZXZpZXcpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0b3JlKGRiKTtcbiJdfQ==
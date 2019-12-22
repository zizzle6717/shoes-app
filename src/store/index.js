"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const queries_1 = require("./queries");
class Store {
    constructor(conn) {
        this.getProducts = (conditions) => this.db.read.query(queries_1.getProductsQuery(conditions));
        this.getShoes = (conditions) => this.db.read.query(queries_1.getShoesQuery(conditions));
        this.getReviews = (conditions) => this.db.read.query(queries_1.getReviewsQuery(conditions));
        this.createReview = (review) => this.db.write.query(queries_1.createReviewQuery(review));
        this.db = conn;
    }
}
exports.default = new Store(db_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUFzQjtBQUN0Qix1Q0FLbUI7QUFFbkIsTUFBTSxLQUFLO0lBR1QsWUFBWSxJQUFJO1FBSWhCLGdCQUFXLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQywwQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBRTlFLGFBQVEsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUV4RSxlQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7UUFFNUUsaUJBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDJCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFUeEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDakIsQ0FBQztDQVNGO0FBRUQsa0JBQWUsSUFBSSxLQUFLLENBQUMsWUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5pbXBvcnQge1xuICBnZXRQcm9kdWN0c1F1ZXJ5LFxuICBnZXRTaG9lc1F1ZXJ5LFxuICBnZXRSZXZpZXdzUXVlcnksXG4gIGNyZWF0ZVJldmlld1F1ZXJ5LFxufSBmcm9tICcuL3F1ZXJpZXMnO1xuXG5jbGFzcyBTdG9yZSB7XG4gIGRiO1xuXG4gIGNvbnN0cnVjdG9yKGNvbm4pIHtcbiAgICB0aGlzLmRiID0gY29ubjtcbiAgfVxuXG4gIGdldFByb2R1Y3RzID0gKGNvbmRpdGlvbnMpID0+IHRoaXMuZGIucmVhZC5xdWVyeShnZXRQcm9kdWN0c1F1ZXJ5KGNvbmRpdGlvbnMpKVxuXG4gIGdldFNob2VzID0gKGNvbmRpdGlvbnMpID0+IHRoaXMuZGIucmVhZC5xdWVyeShnZXRTaG9lc1F1ZXJ5KGNvbmRpdGlvbnMpKVxuXG4gIGdldFJldmlld3MgPSAoY29uZGl0aW9ucykgPT4gdGhpcy5kYi5yZWFkLnF1ZXJ5KGdldFJldmlld3NRdWVyeShjb25kaXRpb25zKSlcblxuICBjcmVhdGVSZXZpZXcgPSAocmV2aWV3KSA9PiB0aGlzLmRiLndyaXRlLnF1ZXJ5KGNyZWF0ZVJldmlld1F1ZXJ5KHJldmlldykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RvcmUoZGIpO1xuIl19
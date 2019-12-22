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
        this.db = conn;
    }
}
exports.default = new Store(db_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUFzQjtBQUN0Qix1Q0FJbUI7QUFFbkIsTUFBTSxLQUFLO0lBR1QsWUFBWSxJQUFJO1FBSWhCLGdCQUFXLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQywwQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBRTlFLGFBQVEsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUV4RSxlQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7UUFQMUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDakIsQ0FBQztDQU9GO0FBRUQsa0JBQWUsSUFBSSxLQUFLLENBQUMsWUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5pbXBvcnQge1xuICBnZXRQcm9kdWN0c1F1ZXJ5LFxuICBnZXRTaG9lc1F1ZXJ5LFxuICBnZXRSZXZpZXdzUXVlcnksXG59IGZyb20gJy4vcXVlcmllcyc7XG5cbmNsYXNzIFN0b3JlIHtcbiAgZGI7XG5cbiAgY29uc3RydWN0b3IoY29ubikge1xuICAgIHRoaXMuZGIgPSBjb25uO1xuICB9XG5cbiAgZ2V0UHJvZHVjdHMgPSAoY29uZGl0aW9ucykgPT4gdGhpcy5kYi5yZWFkLnF1ZXJ5KGdldFByb2R1Y3RzUXVlcnkoY29uZGl0aW9ucykpXG5cbiAgZ2V0U2hvZXMgPSAoY29uZGl0aW9ucykgPT4gdGhpcy5kYi5yZWFkLnF1ZXJ5KGdldFNob2VzUXVlcnkoY29uZGl0aW9ucykpXG5cbiAgZ2V0UmV2aWV3cyA9IChjb25kaXRpb25zKSA9PiB0aGlzLmRiLnJlYWQucXVlcnkoZ2V0UmV2aWV3c1F1ZXJ5KGNvbmRpdGlvbnMpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RvcmUoZGIpO1xuIl19
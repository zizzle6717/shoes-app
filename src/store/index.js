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
            if (conditions.id) {
                product = yield Cache_1.default.getProduct(conditions.id);
            }
            return product ? Promise.resolve({ rows: [product] }) : this.db.read.query(queries_1.getProductsQuery(conditions));
        });
        this.getShoes = (conditions) => __awaiter(this, void 0, void 0, function* () {
            let shoe;
            if (conditions.id) {
                shoe = yield Cache_1.default.getShoe(conditions.id);
            }
            return shoe ? { rows: [shoe] } : this.db.read.query(queries_1.getShoesQuery(conditions));
        });
        this.getReviews = (conditions) => __awaiter(this, void 0, void 0, function* () {
            let reviewsRes;
            if (conditions.productId) {
                reviewsRes = yield Cache_1.default.getReviews(conditions.productId);
            }
            return (reviewsRes && reviewsRes.length) ? { rows: reviewsRes } : this.db.read.query(queries_1.getReviewsQuery(conditions));
        });
        this.createReview = (review) => __awaiter(this, void 0, void 0, function* () {
            const reviewRes = yield this.db.write.query(queries_1.createReviewQuery(review));
            if (reviewRes.rows.length) {
                yield Cache_1.default.setReviews(review.productId, [Object.assign(Object.assign({}, review), { id: reviewRes.rows[0].id })]);
            }
            return reviewRes;
        });
        this.db = conn;
    }
}
exports.default = new Store(db_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFzQjtBQUN0QixvREFBNEI7QUFDNUIsdUNBS21CO0FBRW5CLE1BQU0sS0FBSztJQUdULFlBQVksSUFBSTtRQUloQixnQkFBVyxHQUFHLENBQU8sVUFBVSxFQUFFLEVBQUU7WUFDakMsSUFBSSxPQUFPLENBQUM7WUFDWixJQUFJLFVBQVUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sR0FBRyxNQUFNLGVBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQywwQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNHLENBQUMsQ0FBQSxDQUFBO1FBRUQsYUFBUSxHQUFHLENBQU8sVUFBVSxFQUFFLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUM7WUFDVCxJQUFJLFVBQVUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pCLElBQUksR0FBRyxNQUFNLGVBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUEsQ0FBQTtRQUVELGVBQVUsR0FBRyxDQUFPLFVBQVUsRUFBRSxFQUFFO1lBQ2hDLElBQUksVUFBVSxDQUFDO1lBQ2YsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFO2dCQUN4QixVQUFVLEdBQUcsTUFBTSxlQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzRDtZQUNELE9BQU8sQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNwSCxDQUFDLENBQUEsQ0FBQTtRQUVELGlCQUFZLEdBQUcsQ0FBTyxNQUFNLEVBQUUsRUFBRTtZQUM5QixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQywyQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLE1BQU0sZUFBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGlDQUFNLE1BQU0sS0FBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUcsQ0FBQyxDQUFDO2FBQ3JGO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxDQUFBLENBQUM7UUFsQ0EsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDakIsQ0FBQztDQWtDRjtBQUVELGtCQUFlLElBQUksS0FBSyxDQUFDLFlBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4vZGInO1xuaW1wb3J0IENhY2hlIGZyb20gJy4vQ2FjaGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvZHVjdHNRdWVyeSxcbiAgZ2V0U2hvZXNRdWVyeSxcbiAgZ2V0UmV2aWV3c1F1ZXJ5LFxuICBjcmVhdGVSZXZpZXdRdWVyeSxcbn0gZnJvbSAnLi9xdWVyaWVzJztcblxuY2xhc3MgU3RvcmUge1xuICBkYjtcblxuICBjb25zdHJ1Y3Rvcihjb25uKSB7XG4gICAgdGhpcy5kYiA9IGNvbm47XG4gIH1cblxuICBnZXRQcm9kdWN0cyA9IGFzeW5jIChjb25kaXRpb25zKSA9PiB7XG4gICAgbGV0IHByb2R1Y3Q7XG4gICAgaWYgKGNvbmRpdGlvbnMuaWQpIHtcbiAgICAgIHByb2R1Y3QgPSBhd2FpdCBDYWNoZS5nZXRQcm9kdWN0KGNvbmRpdGlvbnMuaWQpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZHVjdCA/IFByb21pc2UucmVzb2x2ZSh7IHJvd3M6IFtwcm9kdWN0XSB9KSA6IHRoaXMuZGIucmVhZC5xdWVyeShnZXRQcm9kdWN0c1F1ZXJ5KGNvbmRpdGlvbnMpKTtcbiAgfVxuXG4gIGdldFNob2VzID0gYXN5bmMgKGNvbmRpdGlvbnMpID0+IHtcbiAgICBsZXQgc2hvZTtcbiAgICBpZiAoY29uZGl0aW9ucy5pZCkge1xuICAgICAgc2hvZSA9IGF3YWl0IENhY2hlLmdldFNob2UoY29uZGl0aW9ucy5pZCk7XG4gICAgfVxuICAgIHJldHVybiBzaG9lID8geyByb3dzOiBbc2hvZV0gfSA6IHRoaXMuZGIucmVhZC5xdWVyeShnZXRTaG9lc1F1ZXJ5KGNvbmRpdGlvbnMpKTtcbiAgfVxuXG4gIGdldFJldmlld3MgPSBhc3luYyAoY29uZGl0aW9ucykgPT4ge1xuICAgIGxldCByZXZpZXdzUmVzO1xuICAgIGlmIChjb25kaXRpb25zLnByb2R1Y3RJZCkge1xuICAgICAgcmV2aWV3c1JlcyA9IGF3YWl0IENhY2hlLmdldFJldmlld3MoY29uZGl0aW9ucy5wcm9kdWN0SWQpO1xuICAgIH1cbiAgICByZXR1cm4gKHJldmlld3NSZXMgJiYgcmV2aWV3c1Jlcy5sZW5ndGgpID8geyByb3dzOiByZXZpZXdzUmVzIH0gOiB0aGlzLmRiLnJlYWQucXVlcnkoZ2V0UmV2aWV3c1F1ZXJ5KGNvbmRpdGlvbnMpKTtcbiAgfVxuXG4gIGNyZWF0ZVJldmlldyA9IGFzeW5jIChyZXZpZXcpID0+IHtcbiAgICBjb25zdCByZXZpZXdSZXMgPSBhd2FpdCB0aGlzLmRiLndyaXRlLnF1ZXJ5KGNyZWF0ZVJldmlld1F1ZXJ5KHJldmlldykpO1xuICAgIGlmIChyZXZpZXdSZXMucm93cy5sZW5ndGgpIHtcbiAgICAgIGF3YWl0IENhY2hlLnNldFJldmlld3MocmV2aWV3LnByb2R1Y3RJZCwgW3sgLi4ucmV2aWV3LCBpZDogcmV2aWV3UmVzLnJvd3NbMF0uaWQgfV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXZpZXdSZXM7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTdG9yZShkYik7XG4iXX0=
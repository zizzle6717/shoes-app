"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const queries_1 = require("./queries");
class Store {
    constructor(conn) {
        this.getProducts = (conditions) => {
            return this.db.read.query(queries_1.getProductsQuery(conditions));
        };
        this.getShoes = (conditions) => {
            return this.db.read.query(queries_1.getShoesQuery(conditions));
        };
        this.db = conn;
    }
}
exports.default = new Store(db_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUFzQjtBQUN0Qix1Q0FHbUI7QUFFbkIsTUFBTSxLQUFLO0lBR1QsWUFBWSxJQUFJO1FBSWhCLGdCQUFXLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQywwQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3pELENBQUMsQ0FBQTtRQUVELGFBQVEsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUN0RCxDQUFDLENBQUE7UUFUQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNqQixDQUFDO0NBU0Y7QUFFRCxrQkFBZSxJQUFJLEtBQUssQ0FBQyxZQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICcuL2RiJztcbmltcG9ydCB7XG4gIGdldFByb2R1Y3RzUXVlcnksXG4gIGdldFNob2VzUXVlcnksXG59IGZyb20gJy4vcXVlcmllcyc7XG5cbmNsYXNzIFN0b3JlIHtcbiAgZGI7XG5cbiAgY29uc3RydWN0b3IoY29ubikge1xuICAgIHRoaXMuZGIgPSBjb25uO1xuICB9XG5cbiAgZ2V0UHJvZHVjdHMgPSAoY29uZGl0aW9ucykgPT4ge1xuICAgIHJldHVybiB0aGlzLmRiLnJlYWQucXVlcnkoZ2V0UHJvZHVjdHNRdWVyeShjb25kaXRpb25zKSlcbiAgfVxuXG4gIGdldFNob2VzID0gKGNvbmRpdGlvbnMpID0+IHtcbiAgICByZXR1cm4gdGhpcy5kYi5yZWFkLnF1ZXJ5KGdldFNob2VzUXVlcnkoY29uZGl0aW9ucykpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0b3JlKGRiKTsiXX0=
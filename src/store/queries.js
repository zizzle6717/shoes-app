"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const tableNames_1 = __importDefault(require("../constants/tableNames"));
const knex = knex_1.default({ client: 'pg' });
exports.getProductsQuery = (conditions = {}) => {
    return knex.select([
        'id',
        'brand',
        'createdAt',
        'updatedAt',
    ])
        .from(tableNames_1.default.PRODUCTS)
        .where(conditions)
        .toString();
};
exports.getShoesQuery = (conditions = {}) => {
    return knex.select([
        'id',
        'productId',
        'name',
        'createdAt',
        'updatedAt',
    ])
        .from(tableNames_1.default.SHOES)
        .where(conditions)
        .toString();
};
exports.getReviewsQuery = (conditions = {}) => {
    return knex.select([
        'id',
        'productId',
        'trueToSizeScore',
        'createdAt',
        'updatedAt',
    ])
        .from(tableNames_1.default.REVIEWS)
        .where(conditions)
        .toString();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBd0I7QUFDeEIseUVBQWlEO0FBRWpELE1BQU0sSUFBSSxHQUFHLGNBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXZCLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFLEVBQUU7SUFDbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pCLElBQUk7UUFDSixPQUFPO1FBQ1AsV0FBVztRQUNYLFdBQVc7S0FDWixDQUFDO1NBQ0MsSUFBSSxDQUFDLG9CQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3pCLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDakIsUUFBUSxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFLEVBQUU7SUFDL0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pCLElBQUk7UUFDSixXQUFXO1FBQ1gsTUFBTTtRQUNOLFdBQVc7UUFDWCxXQUFXO0tBQ1osQ0FBQztTQUNDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEtBQUssQ0FBQztTQUN0QixLQUFLLENBQUMsVUFBVSxDQUFDO1NBQ2pCLFFBQVEsRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsRUFBRSxFQUFFO0lBQ2pELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQixJQUFJO1FBQ0osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsV0FBVztLQUNaLENBQUM7U0FDQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxPQUFPLENBQUM7U0FDeEIsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUNqQixRQUFRLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB0YWJsZU5hbWVzIGZyb20gJy4uL2NvbnN0YW50cy90YWJsZU5hbWVzJztcblxuY29uc3Qga25leCA9IEtuZXgoeyBjbGllbnQ6ICdwZycgfSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c1F1ZXJ5ID0gKGNvbmRpdGlvbnMgPSB7fSkgPT4ge1xuICByZXR1cm4ga25leC5zZWxlY3QoW1xuICAgICdpZCcsXG4gICAgJ2JyYW5kJyxcbiAgICAnY3JlYXRlZEF0JyxcbiAgICAndXBkYXRlZEF0JyxcbiAgXSlcbiAgICAuZnJvbSh0YWJsZU5hbWVzLlBST0RVQ1RTKVxuICAgIC53aGVyZShjb25kaXRpb25zKVxuICAgIC50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNob2VzUXVlcnkgPSAoY29uZGl0aW9ucyA9IHt9KSA9PiB7XG4gIHJldHVybiBrbmV4LnNlbGVjdChbXG4gICAgJ2lkJyxcbiAgICAncHJvZHVjdElkJyxcbiAgICAnbmFtZScsXG4gICAgJ2NyZWF0ZWRBdCcsXG4gICAgJ3VwZGF0ZWRBdCcsXG4gIF0pXG4gICAgLmZyb20odGFibGVOYW1lcy5TSE9FUylcbiAgICAud2hlcmUoY29uZGl0aW9ucylcbiAgICAudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSZXZpZXdzUXVlcnkgPSAoY29uZGl0aW9ucyA9IHt9KSA9PiB7XG4gIHJldHVybiBrbmV4LnNlbGVjdChbXG4gICAgJ2lkJyxcbiAgICAncHJvZHVjdElkJyxcbiAgICAndHJ1ZVRvU2l6ZVNjb3JlJyxcbiAgICAnY3JlYXRlZEF0JyxcbiAgICAndXBkYXRlZEF0JyxcbiAgXSlcbiAgICAuZnJvbSh0YWJsZU5hbWVzLlJFVklFV1MpXG4gICAgLndoZXJlKGNvbmRpdGlvbnMpXG4gICAgLnRvU3RyaW5nKCk7XG59O1xuIl19
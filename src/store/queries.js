"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const tableNames_1 = __importDefault(require("../constants/tableNames"));
const knex = knex_1.default({ client: 'pg' });
exports.getProductsQuery = (conditions = {}) => knex.select([
    'id',
    'brand',
    'createdAt',
    'updatedAt',
])
    .from(tableNames_1.default.PRODUCTS)
    .where(conditions)
    .toString();
exports.getShoesQuery = (conditions = {}) => knex.select([
    'id',
    'productId',
    'name',
    'createdAt',
    'updatedAt',
])
    .from(tableNames_1.default.SHOES)
    .where(conditions)
    .toString();
exports.getReviewsQuery = (conditions = {}) => knex.select([
    'id',
    'productId',
    'trueToSizeScore',
    'createdAt',
    'updatedAt',
])
    .from(tableNames_1.default.REVIEWS)
    .where(conditions)
    .toString();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBd0I7QUFDeEIseUVBQWlEO0FBRWpELE1BQU0sSUFBSSxHQUFHLGNBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXZCLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9ELElBQUk7SUFDSixPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7Q0FDWixDQUFDO0tBQ0MsSUFBSSxDQUFDLG9CQUFVLENBQUMsUUFBUSxDQUFDO0tBQ3pCLEtBQUssQ0FBQyxVQUFVLENBQUM7S0FDakIsUUFBUSxFQUFFLENBQUM7QUFFRCxRQUFBLGFBQWEsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDNUQsSUFBSTtJQUNKLFdBQVc7SUFDWCxNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVc7Q0FDWixDQUFDO0tBQ0MsSUFBSSxDQUFDLG9CQUFVLENBQUMsS0FBSyxDQUFDO0tBQ3RCLEtBQUssQ0FBQyxVQUFVLENBQUM7S0FDakIsUUFBUSxFQUFFLENBQUM7QUFFRCxRQUFBLGVBQWUsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUQsSUFBSTtJQUNKLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7Q0FDWixDQUFDO0tBQ0MsSUFBSSxDQUFDLG9CQUFVLENBQUMsT0FBTyxDQUFDO0tBQ3hCLEtBQUssQ0FBQyxVQUFVLENBQUM7S0FDakIsUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB0YWJsZU5hbWVzIGZyb20gJy4uL2NvbnN0YW50cy90YWJsZU5hbWVzJztcblxuY29uc3Qga25leCA9IEtuZXgoeyBjbGllbnQ6ICdwZycgfSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c1F1ZXJ5ID0gKGNvbmRpdGlvbnMgPSB7fSkgPT4ga25leC5zZWxlY3QoW1xuICAnaWQnLFxuICAnYnJhbmQnLFxuICAnY3JlYXRlZEF0JyxcbiAgJ3VwZGF0ZWRBdCcsXG5dKVxuICAuZnJvbSh0YWJsZU5hbWVzLlBST0RVQ1RTKVxuICAud2hlcmUoY29uZGl0aW9ucylcbiAgLnRvU3RyaW5nKCk7XG5cbmV4cG9ydCBjb25zdCBnZXRTaG9lc1F1ZXJ5ID0gKGNvbmRpdGlvbnMgPSB7fSkgPT4ga25leC5zZWxlY3QoW1xuICAnaWQnLFxuICAncHJvZHVjdElkJyxcbiAgJ25hbWUnLFxuICAnY3JlYXRlZEF0JyxcbiAgJ3VwZGF0ZWRBdCcsXG5dKVxuICAuZnJvbSh0YWJsZU5hbWVzLlNIT0VTKVxuICAud2hlcmUoY29uZGl0aW9ucylcbiAgLnRvU3RyaW5nKCk7XG5cbmV4cG9ydCBjb25zdCBnZXRSZXZpZXdzUXVlcnkgPSAoY29uZGl0aW9ucyA9IHt9KSA9PiBrbmV4LnNlbGVjdChbXG4gICdpZCcsXG4gICdwcm9kdWN0SWQnLFxuICAndHJ1ZVRvU2l6ZVNjb3JlJyxcbiAgJ2NyZWF0ZWRBdCcsXG4gICd1cGRhdGVkQXQnLFxuXSlcbiAgLmZyb20odGFibGVOYW1lcy5SRVZJRVdTKVxuICAud2hlcmUoY29uZGl0aW9ucylcbiAgLnRvU3RyaW5nKCk7XG4iXX0=
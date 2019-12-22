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
exports.createReviewQuery = (review) => knex.insert(review)
    .into(tableNames_1.default.REVIEWS)
    .returning('id')
    .toString();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBd0I7QUFDeEIseUVBQWlEO0FBRWpELE1BQU0sSUFBSSxHQUFHLGNBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXZCLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9ELElBQUk7SUFDSixPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7Q0FDWixDQUFDO0tBQ0MsSUFBSSxDQUFDLG9CQUFVLENBQUMsUUFBUSxDQUFDO0tBQ3pCLEtBQUssQ0FBQyxVQUFVLENBQUM7S0FDakIsUUFBUSxFQUFFLENBQUM7QUFFRCxRQUFBLGFBQWEsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDNUQsSUFBSTtJQUNKLFdBQVc7SUFDWCxNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVc7Q0FDWixDQUFDO0tBQ0MsSUFBSSxDQUFDLG9CQUFVLENBQUMsS0FBSyxDQUFDO0tBQ3RCLEtBQUssQ0FBQyxVQUFVLENBQUM7S0FDakIsUUFBUSxFQUFFLENBQUM7QUFFRCxRQUFBLGVBQWUsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUQsSUFBSTtJQUNKLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7Q0FDWixDQUFDO0tBQ0MsSUFBSSxDQUFDLG9CQUFVLENBQUMsT0FBTyxDQUFDO0tBQ3hCLEtBQUssQ0FBQyxVQUFVLENBQUM7S0FDakIsUUFBUSxFQUFFLENBQUM7QUFFRCxRQUFBLGlCQUFpQixHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUM3RCxJQUFJLENBQUMsb0JBQVUsQ0FBQyxPQUFPLENBQUM7S0FDeEIsU0FBUyxDQUFDLElBQUksQ0FBQztLQUNmLFFBQVEsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgdGFibGVOYW1lcyBmcm9tICcuLi9jb25zdGFudHMvdGFibGVOYW1lcyc7XG5cbmNvbnN0IGtuZXggPSBLbmV4KHsgY2xpZW50OiAncGcnIH0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNRdWVyeSA9IChjb25kaXRpb25zID0ge30pID0+IGtuZXguc2VsZWN0KFtcbiAgJ2lkJyxcbiAgJ2JyYW5kJyxcbiAgJ2NyZWF0ZWRBdCcsXG4gICd1cGRhdGVkQXQnLFxuXSlcbiAgLmZyb20odGFibGVOYW1lcy5QUk9EVUNUUylcbiAgLndoZXJlKGNvbmRpdGlvbnMpXG4gIC50b1N0cmluZygpO1xuXG5leHBvcnQgY29uc3QgZ2V0U2hvZXNRdWVyeSA9IChjb25kaXRpb25zID0ge30pID0+IGtuZXguc2VsZWN0KFtcbiAgJ2lkJyxcbiAgJ3Byb2R1Y3RJZCcsXG4gICduYW1lJyxcbiAgJ2NyZWF0ZWRBdCcsXG4gICd1cGRhdGVkQXQnLFxuXSlcbiAgLmZyb20odGFibGVOYW1lcy5TSE9FUylcbiAgLndoZXJlKGNvbmRpdGlvbnMpXG4gIC50b1N0cmluZygpO1xuXG5leHBvcnQgY29uc3QgZ2V0UmV2aWV3c1F1ZXJ5ID0gKGNvbmRpdGlvbnMgPSB7fSkgPT4ga25leC5zZWxlY3QoW1xuICAnaWQnLFxuICAncHJvZHVjdElkJyxcbiAgJ3RydWVUb1NpemVTY29yZScsXG4gICdjcmVhdGVkQXQnLFxuICAndXBkYXRlZEF0Jyxcbl0pXG4gIC5mcm9tKHRhYmxlTmFtZXMuUkVWSUVXUylcbiAgLndoZXJlKGNvbmRpdGlvbnMpXG4gIC50b1N0cmluZygpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmV2aWV3UXVlcnkgPSAocmV2aWV3KSA9PiBrbmV4Lmluc2VydChyZXZpZXcpXG4gIC5pbnRvKHRhYmxlTmFtZXMuUkVWSUVXUylcbiAgLnJldHVybmluZygnaWQnKVxuICAudG9TdHJpbmcoKTtcbiJdfQ==
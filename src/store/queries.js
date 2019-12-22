"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knex = knex_1.default({ client: 'pg' });
const PRODUCTS_TABLE = 'products';
const SHOES_TABLE = 'shoes';
exports.getProductsQuery = (conditions = {}) => {
    return knex.select([
        'id',
        'brand',
        'createdAt',
        'updatedAt',
    ])
        .from(PRODUCTS_TABLE)
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
        .from(SHOES_TABLE)
        .where(conditions)
        .toString();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBd0I7QUFFeEIsTUFBTSxJQUFJLEdBQUcsY0FBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDcEMsTUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDO0FBQ2xDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUVmLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFLEVBQUU7SUFDbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pCLElBQUk7UUFDSixPQUFPO1FBQ1AsV0FBVztRQUNYLFdBQVc7S0FDWixDQUFDO1NBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUNwQixLQUFLLENBQUMsVUFBVSxDQUFDO1NBQ2pCLFFBQVEsRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVXLFFBQUEsYUFBYSxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsRUFBRSxFQUFFO0lBQy9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQixJQUFJO1FBQ0osV0FBVztRQUNYLE1BQU07UUFDTixXQUFXO1FBQ1gsV0FBVztLQUNaLENBQUM7U0FDQyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ2pCLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDakIsUUFBUSxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtuZXggZnJvbSAna25leCc7XG5cbmNvbnN0IGtuZXggPSBLbmV4KHsgY2xpZW50OiAncGcnIH0pO1xuY29uc3QgUFJPRFVDVFNfVEFCTEUgPSAncHJvZHVjdHMnO1xuY29uc3QgU0hPRVNfVEFCTEUgPSAnc2hvZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNRdWVyeSA9IChjb25kaXRpb25zID0ge30pID0+IHtcbiAgcmV0dXJuIGtuZXguc2VsZWN0KFtcbiAgICAnaWQnLFxuICAgICdicmFuZCcsXG4gICAgJ2NyZWF0ZWRBdCcsXG4gICAgJ3VwZGF0ZWRBdCcsXG4gIF0pXG4gICAgLmZyb20oUFJPRFVDVFNfVEFCTEUpXG4gICAgLndoZXJlKGNvbmRpdGlvbnMpXG4gICAgLnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2hvZXNRdWVyeSA9IChjb25kaXRpb25zID0ge30pID0+IHtcbiAgcmV0dXJuIGtuZXguc2VsZWN0KFtcbiAgICAnaWQnLFxuICAgICdwcm9kdWN0SWQnLFxuICAgICduYW1lJyxcbiAgICAnY3JlYXRlZEF0JyxcbiAgICAndXBkYXRlZEF0JyxcbiAgXSlcbiAgICAuZnJvbShTSE9FU19UQUJMRSlcbiAgICAud2hlcmUoY29uZGl0aW9ucylcbiAgICAudG9TdHJpbmcoKTtcbn07XG4iXX0=
"use strict";
/* eslint-disable quotes, max-len */
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const queries_1 = require("../../../src/store/queries");
describe('Queries', () => {
    describe('getProducts()', () => {
        it('should return a postgresql query to select products from db', () => {
            const expected = `select "id", "brand", "createdAt", "updatedAt" from "products" where "id" = 1`;
            const actual = queries_1.getProductsQuery({
                id: 1,
            });
            chai_1.expect(actual).to.equal(expected);
        });
        it('should return a postgresql query to select all products from db when conditions are undefind', () => {
            const expected = `select "id", "brand", "createdAt", "updatedAt" from "products"`;
            const actual = queries_1.getProductsQuery();
            chai_1.expect(actual).to.equal(expected);
        });
    });
    describe('getShoes()', () => {
        it('should return a postgresql query to select shoes from db', () => {
            const expected = `select "id", "productId", "name", "createdAt", "updatedAt" from "shoes" where "productId" = 2`;
            const actual = queries_1.getShoesQuery({
                productId: 2,
            });
            chai_1.expect(actual).to.equal(expected);
        });
        it('should return a postgresql query to select shoes from db when conditions are undefind', () => {
            const expected = `select "id", "productId", "name", "createdAt", "updatedAt" from "shoes"`;
            const actual = queries_1.getShoesQuery();
            chai_1.expect(actual).to.equal(expected);
        });
    });
    describe('getReviews()', () => {
        it('should return a postgresql query to select reviews from db', () => {
            const expected = `select "id", "productId", "trueToSizeScore", "createdAt", "updatedAt" from "reviews" where "productId" = 2`;
            const actual = queries_1.getReviewsQuery({
                productId: 2,
            });
            chai_1.expect(actual).to.equal(expected);
        });
        it('should return a postgresql query to select reviews from db when conditions are undefind', () => {
            const expected = `select "id", "productId", "trueToSizeScore", "createdAt", "updatedAt" from "reviews"`;
            const actual = queries_1.getReviewsQuery();
            chai_1.expect(actual).to.equal(expected);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlcmllcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBb0M7O0FBRXBDLCtCQUE4QjtBQUM5Qix3REFJb0M7QUFFcEMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDdkIsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDN0IsRUFBRSxDQUFDLDZEQUE2RCxFQUFFLEdBQUcsRUFBRTtZQUNyRSxNQUFNLFFBQVEsR0FBRywrRUFBK0UsQ0FBQztZQUNqRyxNQUFNLE1BQU0sR0FBRywwQkFBZ0IsQ0FBQztnQkFDOUIsRUFBRSxFQUFFLENBQUM7YUFDTixDQUFDLENBQUM7WUFDSCxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyw4RkFBOEYsRUFBRSxHQUFHLEVBQUU7WUFDdEcsTUFBTSxRQUFRLEdBQUcsZ0VBQWdFLENBQUM7WUFDbEYsTUFBTSxNQUFNLEdBQUcsMEJBQWdCLEVBQUUsQ0FBQztZQUNsQyxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDMUIsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEdBQUcsRUFBRTtZQUNsRSxNQUFNLFFBQVEsR0FBRywrRkFBK0YsQ0FBQztZQUNqSCxNQUFNLE1BQU0sR0FBRyx1QkFBYSxDQUFDO2dCQUMzQixTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztZQUNILGFBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHVGQUF1RixFQUFFLEdBQUcsRUFBRTtZQUMvRixNQUFNLFFBQVEsR0FBRyx5RUFBeUUsQ0FBQztZQUMzRixNQUFNLE1BQU0sR0FBRyx1QkFBYSxFQUFFLENBQUM7WUFDL0IsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1FBQzVCLEVBQUUsQ0FBQyw0REFBNEQsRUFBRSxHQUFHLEVBQUU7WUFDcEUsTUFBTSxRQUFRLEdBQUcsNEdBQTRHLENBQUM7WUFDOUgsTUFBTSxNQUFNLEdBQUcseUJBQWUsQ0FBQztnQkFDN0IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7WUFDSCxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx5RkFBeUYsRUFBRSxHQUFHLEVBQUU7WUFDakcsTUFBTSxRQUFRLEdBQUcsc0ZBQXNGLENBQUM7WUFDeEcsTUFBTSxNQUFNLEdBQUcseUJBQWUsRUFBRSxDQUFDO1lBQ2pDLGFBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcywgbWF4LWxlbiAqL1xuXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCB7XG4gIGdldFByb2R1Y3RzUXVlcnksXG4gIGdldFNob2VzUXVlcnksXG4gIGdldFJldmlld3NRdWVyeSxcbn0gZnJvbSAnLi4vLi4vLi4vc3JjL3N0b3JlL3F1ZXJpZXMnO1xuXG5kZXNjcmliZSgnUXVlcmllcycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ2dldFByb2R1Y3RzKCknLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwb3N0Z3Jlc3FsIHF1ZXJ5IHRvIHNlbGVjdCBwcm9kdWN0cyBmcm9tIGRiJywgKCkgPT4ge1xuICAgICAgY29uc3QgZXhwZWN0ZWQgPSBgc2VsZWN0IFwiaWRcIiwgXCJicmFuZFwiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiIGZyb20gXCJwcm9kdWN0c1wiIHdoZXJlIFwiaWRcIiA9IDFgO1xuICAgICAgY29uc3QgYWN0dWFsID0gZ2V0UHJvZHVjdHNRdWVyeSh7XG4gICAgICAgIGlkOiAxLFxuICAgICAgfSk7XG4gICAgICBleHBlY3QoYWN0dWFsKS50by5lcXVhbChleHBlY3RlZCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHBvc3RncmVzcWwgcXVlcnkgdG8gc2VsZWN0IGFsbCBwcm9kdWN0cyBmcm9tIGRiIHdoZW4gY29uZGl0aW9ucyBhcmUgdW5kZWZpbmQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBleHBlY3RlZCA9IGBzZWxlY3QgXCJpZFwiLCBcImJyYW5kXCIsIFwiY3JlYXRlZEF0XCIsIFwidXBkYXRlZEF0XCIgZnJvbSBcInByb2R1Y3RzXCJgO1xuICAgICAgY29uc3QgYWN0dWFsID0gZ2V0UHJvZHVjdHNRdWVyeSgpO1xuICAgICAgZXhwZWN0KGFjdHVhbCkudG8uZXF1YWwoZXhwZWN0ZWQpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnZ2V0U2hvZXMoKScsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHBvc3RncmVzcWwgcXVlcnkgdG8gc2VsZWN0IHNob2VzIGZyb20gZGInLCAoKSA9PiB7XG4gICAgICBjb25zdCBleHBlY3RlZCA9IGBzZWxlY3QgXCJpZFwiLCBcInByb2R1Y3RJZFwiLCBcIm5hbWVcIiwgXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIiBmcm9tIFwic2hvZXNcIiB3aGVyZSBcInByb2R1Y3RJZFwiID0gMmA7XG4gICAgICBjb25zdCBhY3R1YWwgPSBnZXRTaG9lc1F1ZXJ5KHtcbiAgICAgICAgcHJvZHVjdElkOiAyLFxuICAgICAgfSk7XG4gICAgICBleHBlY3QoYWN0dWFsKS50by5lcXVhbChleHBlY3RlZCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHBvc3RncmVzcWwgcXVlcnkgdG8gc2VsZWN0IHNob2VzIGZyb20gZGIgd2hlbiBjb25kaXRpb25zIGFyZSB1bmRlZmluZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0gYHNlbGVjdCBcImlkXCIsIFwicHJvZHVjdElkXCIsIFwibmFtZVwiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiIGZyb20gXCJzaG9lc1wiYDtcbiAgICAgIGNvbnN0IGFjdHVhbCA9IGdldFNob2VzUXVlcnkoKTtcbiAgICAgIGV4cGVjdChhY3R1YWwpLnRvLmVxdWFsKGV4cGVjdGVkKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2dldFJldmlld3MoKScsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHBvc3RncmVzcWwgcXVlcnkgdG8gc2VsZWN0IHJldmlld3MgZnJvbSBkYicsICgpID0+IHtcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0gYHNlbGVjdCBcImlkXCIsIFwicHJvZHVjdElkXCIsIFwidHJ1ZVRvU2l6ZVNjb3JlXCIsIFwiY3JlYXRlZEF0XCIsIFwidXBkYXRlZEF0XCIgZnJvbSBcInJldmlld3NcIiB3aGVyZSBcInByb2R1Y3RJZFwiID0gMmA7XG4gICAgICBjb25zdCBhY3R1YWwgPSBnZXRSZXZpZXdzUXVlcnkoe1xuICAgICAgICBwcm9kdWN0SWQ6IDIsXG4gICAgICB9KTtcbiAgICAgIGV4cGVjdChhY3R1YWwpLnRvLmVxdWFsKGV4cGVjdGVkKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcG9zdGdyZXNxbCBxdWVyeSB0byBzZWxlY3QgcmV2aWV3cyBmcm9tIGRiIHdoZW4gY29uZGl0aW9ucyBhcmUgdW5kZWZpbmQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBleHBlY3RlZCA9IGBzZWxlY3QgXCJpZFwiLCBcInByb2R1Y3RJZFwiLCBcInRydWVUb1NpemVTY29yZVwiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiIGZyb20gXCJyZXZpZXdzXCJgO1xuICAgICAgY29uc3QgYWN0dWFsID0gZ2V0UmV2aWV3c1F1ZXJ5KCk7XG4gICAgICBleHBlY3QoYWN0dWFsKS50by5lcXVhbChleHBlY3RlZCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
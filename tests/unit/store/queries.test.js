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
            const expected = `select "id", "productId", "name", "createdAt", "updatedAt" from "shoes" where "id" = 2`;
            const actual = queries_1.getShoesQuery({
                id: 2,
            });
            chai_1.expect(actual).to.equal(expected);
        });
        it('should return a postgresql query to select shoes from db when conditions are undefind', () => {
            const expected = `select "id", "productId", "name", "createdAt", "updatedAt" from "shoes"`;
            const actual = queries_1.getShoesQuery();
            chai_1.expect(actual).to.equal(expected);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlcmllcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBb0M7O0FBRXBDLCtCQUE4QjtBQUM5Qix3REFHb0M7QUFFcEMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDdkIsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDN0IsRUFBRSxDQUFDLDZEQUE2RCxFQUFFLEdBQUcsRUFBRTtZQUNyRSxNQUFNLFFBQVEsR0FBRywrRUFBK0UsQ0FBQztZQUNqRyxNQUFNLE1BQU0sR0FBRywwQkFBZ0IsQ0FBQztnQkFDOUIsRUFBRSxFQUFFLENBQUM7YUFDTixDQUFDLENBQUM7WUFDSCxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyw4RkFBOEYsRUFBRSxHQUFHLEVBQUU7WUFDdEcsTUFBTSxRQUFRLEdBQUcsZ0VBQWdFLENBQUM7WUFDbEYsTUFBTSxNQUFNLEdBQUcsMEJBQWdCLEVBQUUsQ0FBQztZQUNsQyxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDMUIsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEdBQUcsRUFBRTtZQUNsRSxNQUFNLFFBQVEsR0FBRyx3RkFBd0YsQ0FBQztZQUMxRyxNQUFNLE1BQU0sR0FBRyx1QkFBYSxDQUFDO2dCQUMzQixFQUFFLEVBQUUsQ0FBQzthQUNOLENBQUMsQ0FBQztZQUNILGFBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHVGQUF1RixFQUFFLEdBQUcsRUFBRTtZQUMvRixNQUFNLFFBQVEsR0FBRyx5RUFBeUUsQ0FBQztZQUMzRixNQUFNLE1BQU0sR0FBRyx1QkFBYSxFQUFFLENBQUM7WUFDL0IsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcXVvdGVzLCBtYXgtbGVuICovXG5cbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtcbiAgZ2V0UHJvZHVjdHNRdWVyeSxcbiAgZ2V0U2hvZXNRdWVyeSxcbn0gZnJvbSAnLi4vLi4vLi4vc3JjL3N0b3JlL3F1ZXJpZXMnO1xuXG5kZXNjcmliZSgnUXVlcmllcycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ2dldFByb2R1Y3RzKCknLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwb3N0Z3Jlc3FsIHF1ZXJ5IHRvIHNlbGVjdCBwcm9kdWN0cyBmcm9tIGRiJywgKCkgPT4ge1xuICAgICAgY29uc3QgZXhwZWN0ZWQgPSBgc2VsZWN0IFwiaWRcIiwgXCJicmFuZFwiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiIGZyb20gXCJwcm9kdWN0c1wiIHdoZXJlIFwiaWRcIiA9IDFgO1xuICAgICAgY29uc3QgYWN0dWFsID0gZ2V0UHJvZHVjdHNRdWVyeSh7XG4gICAgICAgIGlkOiAxLFxuICAgICAgfSk7XG4gICAgICBleHBlY3QoYWN0dWFsKS50by5lcXVhbChleHBlY3RlZCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHBvc3RncmVzcWwgcXVlcnkgdG8gc2VsZWN0IGFsbCBwcm9kdWN0cyBmcm9tIGRiIHdoZW4gY29uZGl0aW9ucyBhcmUgdW5kZWZpbmQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBleHBlY3RlZCA9IGBzZWxlY3QgXCJpZFwiLCBcImJyYW5kXCIsIFwiY3JlYXRlZEF0XCIsIFwidXBkYXRlZEF0XCIgZnJvbSBcInByb2R1Y3RzXCJgO1xuICAgICAgY29uc3QgYWN0dWFsID0gZ2V0UHJvZHVjdHNRdWVyeSgpO1xuICAgICAgZXhwZWN0KGFjdHVhbCkudG8uZXF1YWwoZXhwZWN0ZWQpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnZ2V0U2hvZXMoKScsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHBvc3RncmVzcWwgcXVlcnkgdG8gc2VsZWN0IHNob2VzIGZyb20gZGInLCAoKSA9PiB7XG4gICAgICBjb25zdCBleHBlY3RlZCA9IGBzZWxlY3QgXCJpZFwiLCBcInByb2R1Y3RJZFwiLCBcIm5hbWVcIiwgXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIiBmcm9tIFwic2hvZXNcIiB3aGVyZSBcImlkXCIgPSAyYDtcbiAgICAgIGNvbnN0IGFjdHVhbCA9IGdldFNob2VzUXVlcnkoe1xuICAgICAgICBpZDogMixcbiAgICAgIH0pO1xuICAgICAgZXhwZWN0KGFjdHVhbCkudG8uZXF1YWwoZXhwZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYSBwb3N0Z3Jlc3FsIHF1ZXJ5IHRvIHNlbGVjdCBzaG9lcyBmcm9tIGRiIHdoZW4gY29uZGl0aW9ucyBhcmUgdW5kZWZpbmQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBleHBlY3RlZCA9IGBzZWxlY3QgXCJpZFwiLCBcInByb2R1Y3RJZFwiLCBcIm5hbWVcIiwgXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIiBmcm9tIFwic2hvZXNcImA7XG4gICAgICBjb25zdCBhY3R1YWwgPSBnZXRTaG9lc1F1ZXJ5KCk7XG4gICAgICBleHBlY3QoYWN0dWFsKS50by5lcXVhbChleHBlY3RlZCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
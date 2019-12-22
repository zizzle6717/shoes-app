"use strict";
/* eslint-disable quotes, max-len */
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const queries_1 = require("../../../src/store/queries");
describe('Queries', () => {
    describe('getProducts()', () => {
        it('should return a postgresql query to select products from db', () => {
            const expected = `select "id", "brand", "createdAt", "updatedAt" from "products" where "id" = 5`;
            const actual = queries_1.getProductsQuery({
                id: 1,
            });
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlcmllcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBb0M7O0FBRXBDLCtCQUE4QjtBQUM5Qix3REFHb0M7QUFFcEMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDdkIsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDN0IsRUFBRSxDQUFDLDZEQUE2RCxFQUFFLEdBQUcsRUFBRTtZQUNyRSxNQUFNLFFBQVEsR0FBRywrRUFBK0UsQ0FBQztZQUNqRyxNQUFNLE1BQU0sR0FBRywwQkFBZ0IsQ0FBQztnQkFDOUIsRUFBRSxFQUFFLENBQUM7YUFDTixDQUFDLENBQUM7WUFDSCxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDMUIsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEdBQUcsRUFBRTtZQUNsRSxNQUFNLFFBQVEsR0FBRyx3RkFBd0YsQ0FBQztZQUMxRyxNQUFNLE1BQU0sR0FBRyx1QkFBYSxDQUFDO2dCQUMzQixFQUFFLEVBQUUsQ0FBQzthQUNOLENBQUMsQ0FBQztZQUNILGFBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcywgbWF4LWxlbiAqL1xuXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCB7XG4gIGdldFByb2R1Y3RzUXVlcnksXG4gIGdldFNob2VzUXVlcnksXG59IGZyb20gJy4uLy4uLy4uL3NyYy9zdG9yZS9xdWVyaWVzJztcblxuZGVzY3JpYmUoJ1F1ZXJpZXMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdnZXRQcm9kdWN0cygpJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcG9zdGdyZXNxbCBxdWVyeSB0byBzZWxlY3QgcHJvZHVjdHMgZnJvbSBkYicsICgpID0+IHtcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0gYHNlbGVjdCBcImlkXCIsIFwiYnJhbmRcIiwgXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIiBmcm9tIFwicHJvZHVjdHNcIiB3aGVyZSBcImlkXCIgPSA1YDtcbiAgICAgIGNvbnN0IGFjdHVhbCA9IGdldFByb2R1Y3RzUXVlcnkoe1xuICAgICAgICBpZDogMSxcbiAgICAgIH0pO1xuICAgICAgZXhwZWN0KGFjdHVhbCkudG8uZXF1YWwoZXhwZWN0ZWQpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnZ2V0U2hvZXMoKScsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHBvc3RncmVzcWwgcXVlcnkgdG8gc2VsZWN0IHNob2VzIGZyb20gZGInLCAoKSA9PiB7XG4gICAgICBjb25zdCBleHBlY3RlZCA9IGBzZWxlY3QgXCJpZFwiLCBcInByb2R1Y3RJZFwiLCBcIm5hbWVcIiwgXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIiBmcm9tIFwic2hvZXNcIiB3aGVyZSBcImlkXCIgPSAyYDtcbiAgICAgIGNvbnN0IGFjdHVhbCA9IGdldFNob2VzUXVlcnkoe1xuICAgICAgICBpZDogMixcbiAgICAgIH0pO1xuICAgICAgZXhwZWN0KGFjdHVhbCkudG8uZXF1YWwoZXhwZWN0ZWQpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19
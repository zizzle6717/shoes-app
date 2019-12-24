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
const redisClient_1 = __importDefault(require("./redisClient"));
const convertObjectToArray_1 = __importDefault(require("../utilities/convertObjectToArray"));
const calculateTts_1 = __importDefault(require("../utilities/calculateTts"));
const getObject = ({ key, parseArray, }) => __awaiter(void 0, void 0, void 0, function* () {
    const obj = yield redisClient_1.default.hgetall(key);
    parseArray.forEach((prop) => { obj[prop] = JSON.parse(obj[prop]); });
    // NOTE: Should return undefined if Redis returns an empty object
    return (obj && Object.keys(obj).length) ? obj : undefined;
});
const setObject = ({ key, data, stringifyArray, }) => __awaiter(void 0, void 0, void 0, function* () {
    const dataWithStringify = data;
    stringifyArray.forEach((prop) => { dataWithStringify[prop] = JSON.stringify(dataWithStringify[prop]); });
    const keyValues = convertObjectToArray_1.default(dataWithStringify);
    yield redisClient_1.default.hset(key, ...keyValues);
});
class Cache {
}
Cache.getProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    if (productId) {
        yield getObject({
            key: `products:${productId}`,
            parseArray: [],
        });
    }
});
Cache.setProduct = (productId, product) => __awaiter(void 0, void 0, void 0, function* () {
    yield setObject({
        key: `products:${productId}`,
        data: product,
        stringifyArray: [],
    });
});
Cache.getShoe = (shoeId) => __awaiter(void 0, void 0, void 0, function* () {
    if (shoeId) {
        yield getObject({
            key: `shoes:${shoeId}`,
            parseArray: [],
        });
    }
});
Cache.setShoe = (shoeId, shoe) => __awaiter(void 0, void 0, void 0, function* () {
    yield setObject({
        key: `shoes:${shoeId}`,
        data: shoe,
        stringifyArray: [],
    });
});
Cache.getReviews = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield redisClient_1.default.smembers(`products:${productId}:reviews`);
    return reviews.map((review) => JSON.parse(review));
});
Cache.setReviews = (productId, reviews) => __awaiter(void 0, void 0, void 0, function* () {
    const existingReviews = yield Cache.getReviews(productId);
    const trueToSizeCalculation = calculateTts_1.default([...existingReviews, ...reviews]);
    yield redisClient_1.default.set(`products:${productId}:trueToSizeCalculation`, trueToSizeCalculation);
    const stringifiedReviews = reviews.map((review) => JSON.stringify(review));
    yield redisClient_1.default.sadd(`products:${productId}:reviews`, ...stringifiedReviews);
});
Cache.getTrueToSizeCalculation = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const ttsCalc = yield redisClient_1.default.get(`products:${productId}:trueToSizeCalculation`);
    return ttsCalc;
});
exports.default = Cache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUF3QztBQUN4Qyw2RkFBcUU7QUFDckUsNkVBQXFEO0FBRXJELE1BQU0sU0FBUyxHQUFHLENBQU8sRUFDdkIsR0FBRyxFQUNILFVBQVUsR0FDWCxFQUFFLEVBQUU7SUFDSCxNQUFNLEdBQUcsR0FBRyxNQUFNLHFCQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckUsaUVBQWlFO0lBQ2pFLE9BQU8sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDNUQsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxDQUFPLEVBQ3ZCLEdBQUcsRUFDSCxJQUFJLEVBQ0osY0FBYyxHQUNmLEVBQUUsRUFBRTtJQUNILE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQy9CLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sU0FBUyxHQUFHLDhCQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUQsTUFBTSxxQkFBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0sS0FBSzs7QUFDRixnQkFBVSxHQUFHLENBQU8sU0FBUyxFQUFFLEVBQUU7SUFDdEMsSUFBSSxTQUFTLEVBQUU7UUFDYixNQUFNLFNBQVMsQ0FBQztZQUNkLEdBQUcsRUFBRSxZQUFZLFNBQVMsRUFBRTtZQUM1QixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFBLENBQUE7QUFFTSxnQkFBVSxHQUFHLENBQU8sU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQy9DLE1BQU0sU0FBUyxDQUFDO1FBQ2QsR0FBRyxFQUFFLFlBQVksU0FBUyxFQUFFO1FBQzVCLElBQUksRUFBRSxPQUFPO1FBQ2IsY0FBYyxFQUFFLEVBQUU7S0FDbkIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFFTSxhQUFPLEdBQUcsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUNoQyxJQUFJLE1BQU0sRUFBRTtRQUNWLE1BQU0sU0FBUyxDQUFDO1lBQ2QsR0FBRyxFQUFFLFNBQVMsTUFBTSxFQUFFO1lBQ3RCLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUEsQ0FBQTtBQUVNLGFBQU8sR0FBRyxDQUFPLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUN0QyxNQUFNLFNBQVMsQ0FBQztRQUNkLEdBQUcsRUFBRSxTQUFTLE1BQU0sRUFBRTtRQUN0QixJQUFJLEVBQUUsSUFBSTtRQUNWLGNBQWMsRUFBRSxFQUFFO0tBQ25CLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFBO0FBRU0sZ0JBQVUsR0FBRyxDQUFPLFNBQVMsRUFBRSxFQUFFO0lBQ3RDLE1BQU0sT0FBTyxHQUFHLE1BQU0scUJBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxTQUFTLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQSxDQUFBO0FBRU0sZ0JBQVUsR0FBRyxDQUFPLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUMvQyxNQUFNLGVBQWUsR0FBRyxNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUQsTUFBTSxxQkFBcUIsR0FBRyxzQkFBWSxDQUFDLENBQUMsR0FBRyxlQUFlLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdFLE1BQU0scUJBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxTQUFTLHdCQUF3QixFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDNUYsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0UsTUFBTSxxQkFBVyxDQUFDLElBQUksQ0FBQyxZQUFZLFNBQVMsVUFBVSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztBQUNqRixDQUFDLENBQUEsQ0FBQTtBQUVNLDhCQUF3QixHQUFHLENBQU8sU0FBUyxFQUFFLEVBQUU7SUFDcEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLFNBQVMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUEsQ0FBQTtBQUdILGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWRpc0NsaWVudCBmcm9tICcuL3JlZGlzQ2xpZW50JztcbmltcG9ydCBjb252ZXJ0T2JqZWN0VG9BcnJheSBmcm9tICcuLi91dGlsaXRpZXMvY29udmVydE9iamVjdFRvQXJyYXknO1xuaW1wb3J0IGNhbGN1bGF0ZVR0cyBmcm9tICcuLi91dGlsaXRpZXMvY2FsY3VsYXRlVHRzJztcblxuY29uc3QgZ2V0T2JqZWN0ID0gYXN5bmMgKHtcbiAga2V5LFxuICBwYXJzZUFycmF5LFxufSkgPT4ge1xuICBjb25zdCBvYmogPSBhd2FpdCByZWRpc0NsaWVudC5oZ2V0YWxsKGtleSk7XG4gIHBhcnNlQXJyYXkuZm9yRWFjaCgocHJvcCkgPT4geyBvYmpbcHJvcF0gPSBKU09OLnBhcnNlKG9ialtwcm9wXSk7IH0pO1xuXG4gIC8vIE5PVEU6IFNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGlmIFJlZGlzIHJldHVybnMgYW4gZW1wdHkgb2JqZWN0XG4gIHJldHVybiAob2JqICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoKSA/IG9iaiA6IHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IHNldE9iamVjdCA9IGFzeW5jICh7XG4gIGtleSxcbiAgZGF0YSxcbiAgc3RyaW5naWZ5QXJyYXksXG59KSA9PiB7XG4gIGNvbnN0IGRhdGFXaXRoU3RyaW5naWZ5ID0gZGF0YTtcbiAgc3RyaW5naWZ5QXJyYXkuZm9yRWFjaCgocHJvcCkgPT4geyBkYXRhV2l0aFN0cmluZ2lmeVtwcm9wXSA9IEpTT04uc3RyaW5naWZ5KGRhdGFXaXRoU3RyaW5naWZ5W3Byb3BdKTsgfSk7XG4gIGNvbnN0IGtleVZhbHVlcyA9IGNvbnZlcnRPYmplY3RUb0FycmF5KGRhdGFXaXRoU3RyaW5naWZ5KTtcbiAgYXdhaXQgcmVkaXNDbGllbnQuaHNldChrZXksIC4uLmtleVZhbHVlcyk7XG59O1xuXG5jbGFzcyBDYWNoZSB7XG4gIHN0YXRpYyBnZXRQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3RJZCkgPT4ge1xuICAgIGlmIChwcm9kdWN0SWQpIHtcbiAgICAgIGF3YWl0IGdldE9iamVjdCh7XG4gICAgICAgIGtleTogYHByb2R1Y3RzOiR7cHJvZHVjdElkfWAsXG4gICAgICAgIHBhcnNlQXJyYXk6IFtdLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNldFByb2R1Y3QgPSBhc3luYyAocHJvZHVjdElkLCBwcm9kdWN0KSA9PiB7XG4gICAgYXdhaXQgc2V0T2JqZWN0KHtcbiAgICAgIGtleTogYHByb2R1Y3RzOiR7cHJvZHVjdElkfWAsXG4gICAgICBkYXRhOiBwcm9kdWN0LFxuICAgICAgc3RyaW5naWZ5QXJyYXk6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldFNob2UgPSBhc3luYyAoc2hvZUlkKSA9PiB7XG4gICAgaWYgKHNob2VJZCkge1xuICAgICAgYXdhaXQgZ2V0T2JqZWN0KHtcbiAgICAgICAga2V5OiBgc2hvZXM6JHtzaG9lSWR9YCxcbiAgICAgICAgcGFyc2VBcnJheTogW10sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2V0U2hvZSA9IGFzeW5jIChzaG9lSWQsIHNob2UpID0+IHtcbiAgICBhd2FpdCBzZXRPYmplY3Qoe1xuICAgICAga2V5OiBgc2hvZXM6JHtzaG9lSWR9YCxcbiAgICAgIGRhdGE6IHNob2UsXG4gICAgICBzdHJpbmdpZnlBcnJheTogW10sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0UmV2aWV3cyA9IGFzeW5jIChwcm9kdWN0SWQpID0+IHtcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcmVkaXNDbGllbnQuc21lbWJlcnMoYHByb2R1Y3RzOiR7cHJvZHVjdElkfTpyZXZpZXdzYCk7XG4gICAgcmV0dXJuIHJldmlld3MubWFwKChyZXZpZXcpID0+IEpTT04ucGFyc2UocmV2aWV3KSk7XG4gIH1cblxuICBzdGF0aWMgc2V0UmV2aWV3cyA9IGFzeW5jIChwcm9kdWN0SWQsIHJldmlld3MpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1Jldmlld3MgPSBhd2FpdCBDYWNoZS5nZXRSZXZpZXdzKHByb2R1Y3RJZCk7XG4gICAgY29uc3QgdHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uID0gY2FsY3VsYXRlVHRzKFsuLi5leGlzdGluZ1Jldmlld3MsIC4uLnJldmlld3NdKTtcbiAgICBhd2FpdCByZWRpc0NsaWVudC5zZXQoYHByb2R1Y3RzOiR7cHJvZHVjdElkfTp0cnVlVG9TaXplQ2FsY3VsYXRpb25gLCB0cnVlVG9TaXplQ2FsY3VsYXRpb24pO1xuICAgIGNvbnN0IHN0cmluZ2lmaWVkUmV2aWV3cyA9IHJldmlld3MubWFwKChyZXZpZXcpID0+IEpTT04uc3RyaW5naWZ5KHJldmlldykpO1xuICAgIGF3YWl0IHJlZGlzQ2xpZW50LnNhZGQoYHByb2R1Y3RzOiR7cHJvZHVjdElkfTpyZXZpZXdzYCwgLi4uc3RyaW5naWZpZWRSZXZpZXdzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUcnVlVG9TaXplQ2FsY3VsYXRpb24gPSBhc3luYyAocHJvZHVjdElkKSA9PiB7XG4gICAgY29uc3QgdHRzQ2FsYyA9IGF3YWl0IHJlZGlzQ2xpZW50LmdldChgcHJvZHVjdHM6JHtwcm9kdWN0SWR9OnRydWVUb1NpemVDYWxjdWxhdGlvbmApO1xuICAgIHJldHVybiB0dHNDYWxjO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhY2hlO1xuIl19
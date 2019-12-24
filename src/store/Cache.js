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
// TODO: For scalability, reviews should be stored in a Redis list and keyed to each object
class Cache {
}
Cache.getProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    if (productId) {
        yield getObject({
            key: `products:${productId}`,
            parseArray: ['shoes', 'reviews'],
        });
    }
});
Cache.setProduct = (productId, product) => __awaiter(void 0, void 0, void 0, function* () {
    yield setObject({
        key: `products:${productId}`,
        data: product,
        stringifyArray: ['shoes', 'reviews'],
    });
});
Cache.getShoe = (shoeId) => __awaiter(void 0, void 0, void 0, function* () {
    if (shoeId) {
        yield getObject({
            key: `shoes:${shoeId}`,
            parseArray: ['reviews'],
        });
    }
});
Cache.setShoe = (shoeId, shoe) => __awaiter(void 0, void 0, void 0, function* () {
    yield setObject({
        key: `shoes:${shoeId}`,
        data: shoe,
        stringifyArray: ['reviews'],
    });
});
exports.default = Cache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUF3QztBQUN4Qyw2RkFBcUU7QUFFckUsTUFBTSxTQUFTLEdBQUcsQ0FBTyxFQUN2QixHQUFHLEVBQ0gsVUFBVSxHQUNYLEVBQUUsRUFBRTtJQUNILE1BQU0sR0FBRyxHQUFHLE1BQU0scUJBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRSxpRUFBaUU7SUFDakUsT0FBTyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUM1RCxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLENBQU8sRUFDdkIsR0FBRyxFQUNILElBQUksRUFDSixjQUFjLEdBQ2YsRUFBRSxFQUFFO0lBQ0gsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDL0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxTQUFTLEdBQUcsOEJBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRCxNQUFNLHFCQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQSxDQUFDO0FBRUYsMkZBQTJGO0FBQzNGLE1BQU0sS0FBSzs7QUFDRixnQkFBVSxHQUFHLENBQU8sU0FBUyxFQUFFLEVBQUU7SUFDdEMsSUFBSSxTQUFTLEVBQUU7UUFDYixNQUFNLFNBQVMsQ0FBQztZQUNkLEdBQUcsRUFBRSxZQUFZLFNBQVMsRUFBRTtZQUM1QixVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1NBQ2pDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFBLENBQUE7QUFFTSxnQkFBVSxHQUFHLENBQU8sU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQy9DLE1BQU0sU0FBUyxDQUFDO1FBQ2QsR0FBRyxFQUFFLFlBQVksU0FBUyxFQUFFO1FBQzVCLElBQUksRUFBRSxPQUFPO1FBQ2IsY0FBYyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztLQUNyQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQUVNLGFBQU8sR0FBRyxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ2hDLElBQUksTUFBTSxFQUFFO1FBQ1YsTUFBTSxTQUFTLENBQUM7WUFDZCxHQUFHLEVBQUUsU0FBUyxNQUFNLEVBQUU7WUFDdEIsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFBLENBQUE7QUFFTSxhQUFPLEdBQUcsQ0FBTyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDdEMsTUFBTSxTQUFTLENBQUM7UUFDZCxHQUFHLEVBQUUsU0FBUyxNQUFNLEVBQUU7UUFDdEIsSUFBSSxFQUFFLElBQUk7UUFDVixjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUM7S0FDNUIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFHSCxrQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVkaXNDbGllbnQgZnJvbSAnLi9yZWRpc0NsaWVudCc7XG5pbXBvcnQgY29udmVydE9iamVjdFRvQXJyYXkgZnJvbSAnLi4vdXRpbGl0aWVzL2NvbnZlcnRPYmplY3RUb0FycmF5JztcblxuY29uc3QgZ2V0T2JqZWN0ID0gYXN5bmMgKHtcbiAga2V5LFxuICBwYXJzZUFycmF5LFxufSkgPT4ge1xuICBjb25zdCBvYmogPSBhd2FpdCByZWRpc0NsaWVudC5oZ2V0YWxsKGtleSk7XG4gIHBhcnNlQXJyYXkuZm9yRWFjaCgocHJvcCkgPT4geyBvYmpbcHJvcF0gPSBKU09OLnBhcnNlKG9ialtwcm9wXSk7IH0pO1xuXG4gIC8vIE5PVEU6IFNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGlmIFJlZGlzIHJldHVybnMgYW4gZW1wdHkgb2JqZWN0XG4gIHJldHVybiAob2JqICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoKSA/IG9iaiA6IHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IHNldE9iamVjdCA9IGFzeW5jICh7XG4gIGtleSxcbiAgZGF0YSxcbiAgc3RyaW5naWZ5QXJyYXksXG59KSA9PiB7XG4gIGNvbnN0IGRhdGFXaXRoU3RyaW5naWZ5ID0gZGF0YTtcbiAgc3RyaW5naWZ5QXJyYXkuZm9yRWFjaCgocHJvcCkgPT4geyBkYXRhV2l0aFN0cmluZ2lmeVtwcm9wXSA9IEpTT04uc3RyaW5naWZ5KGRhdGFXaXRoU3RyaW5naWZ5W3Byb3BdKTsgfSk7XG4gIGNvbnN0IGtleVZhbHVlcyA9IGNvbnZlcnRPYmplY3RUb0FycmF5KGRhdGFXaXRoU3RyaW5naWZ5KTtcbiAgYXdhaXQgcmVkaXNDbGllbnQuaHNldChrZXksIC4uLmtleVZhbHVlcyk7XG59O1xuXG4vLyBUT0RPOiBGb3Igc2NhbGFiaWxpdHksIHJldmlld3Mgc2hvdWxkIGJlIHN0b3JlZCBpbiBhIFJlZGlzIGxpc3QgYW5kIGtleWVkIHRvIGVhY2ggb2JqZWN0XG5jbGFzcyBDYWNoZSB7XG4gIHN0YXRpYyBnZXRQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3RJZCkgPT4ge1xuICAgIGlmIChwcm9kdWN0SWQpIHtcbiAgICAgIGF3YWl0IGdldE9iamVjdCh7XG4gICAgICAgIGtleTogYHByb2R1Y3RzOiR7cHJvZHVjdElkfWAsXG4gICAgICAgIHBhcnNlQXJyYXk6IFsnc2hvZXMnLCAncmV2aWV3cyddLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNldFByb2R1Y3QgPSBhc3luYyAocHJvZHVjdElkLCBwcm9kdWN0KSA9PiB7XG4gICAgYXdhaXQgc2V0T2JqZWN0KHtcbiAgICAgIGtleTogYHByb2R1Y3RzOiR7cHJvZHVjdElkfWAsXG4gICAgICBkYXRhOiBwcm9kdWN0LFxuICAgICAgc3RyaW5naWZ5QXJyYXk6IFsnc2hvZXMnLCAncmV2aWV3cyddLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldFNob2UgPSBhc3luYyAoc2hvZUlkKSA9PiB7XG4gICAgaWYgKHNob2VJZCkge1xuICAgICAgYXdhaXQgZ2V0T2JqZWN0KHtcbiAgICAgICAga2V5OiBgc2hvZXM6JHtzaG9lSWR9YCxcbiAgICAgICAgcGFyc2VBcnJheTogWydyZXZpZXdzJ10sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2V0U2hvZSA9IGFzeW5jIChzaG9lSWQsIHNob2UpID0+IHtcbiAgICBhd2FpdCBzZXRPYmplY3Qoe1xuICAgICAga2V5OiBgc2hvZXM6JHtzaG9lSWR9YCxcbiAgICAgIGRhdGE6IHNob2UsXG4gICAgICBzdHJpbmdpZnlBcnJheTogWydyZXZpZXdzJ10sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG4iXX0=
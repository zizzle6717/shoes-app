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
    let product;
    if (productId) {
        product = yield getObject({
            key: `products:${productId}`,
            parseArray: [],
        });
    }
    if (product) {
        product.id = Number(product.id);
        product.trueToSizeCalculation = Number(product.trueToSizeCalculation);
    }
    return product;
});
Cache.setProduct = (productId, product) => __awaiter(void 0, void 0, void 0, function* () {
    yield setObject({
        key: `products:${productId}`,
        data: product,
        stringifyArray: [],
    });
});
Cache.getShoe = (shoeId) => __awaiter(void 0, void 0, void 0, function* () {
    let shoe;
    if (shoeId) {
        shoe = yield getObject({
            key: `shoes:${shoeId}`,
            parseArray: [],
        });
    }
    if (shoe) {
        shoe.id = Number(shoe.id);
        shoe.productId = Number(shoe.productId);
    }
    return shoe;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUF3QztBQUN4Qyw2RkFBcUU7QUFDckUsNkVBQXFEO0FBRXJELE1BQU0sU0FBUyxHQUFHLENBQU8sRUFDdkIsR0FBRyxFQUNILFVBQVUsR0FDWCxFQUFFLEVBQUU7SUFDSCxNQUFNLEdBQUcsR0FBRyxNQUFNLHFCQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckUsaUVBQWlFO0lBQ2pFLE9BQU8sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDNUQsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxDQUFPLEVBQ3ZCLEdBQUcsRUFDSCxJQUFJLEVBQ0osY0FBYyxHQUNmLEVBQUUsRUFBRTtJQUNILE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQy9CLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sU0FBUyxHQUFHLDhCQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUQsTUFBTSxxQkFBVyxDQUFDLElBQUksQ0FBQyxH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a0IsQ0FBQyxDQUFDO0FBQ2pGLENBQUMsQ0FBQSxDQUFBO0FBRU0sOEJBQXdCLEdBQUcsQ0FBTyxTQUFTLEVBQUUsRUFBRTtJQUNwRCxNQUFNLE9BQU8sR0FBRyxNQUFNLHFCQUFXLENBQUMsR0FBRyxDQUFDLFlBQVksU0FBUyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JGLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQSxDQUFBO0FBR0gsa0JBQWUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZGlzQ2xpZW50IGZyb20gJy4vcmVkaXNDbGllbnQnO1xuaW1wb3J0IGNvbnZlcnRPYmplY3RUb0FycmF5IGZyb20gJy4uL3V0aWxpdGllcy9jb252ZXJ0T2JqZWN0VG9BcnJheSc7XG5pbXBvcnQgY2FsY3VsYXRlVHRzIGZyb20gJy4uL3V0aWxpdGllcy9jYWxjdWxhdGVUdHMnO1xuXG5jb25zdCBnZXRPYmplY3QgPSBhc3luYyAoe1xuICBrZXksXG4gIHBhcnNlQXJyYXksXG59KSA9PiB7XG4gIGNvbnN0IG9iaiA9IGF3YWl0IHJlZGlzQ2xpZW50LmhnZXRhbGwoa2V5KTtcbiAgcGFyc2VBcnJheS5mb3JFYWNoKChwcm9wKSA9PiB7IG9ialtwcm9wXSA9IEpTT04ucGFyc2Uob2JqW3Byb3BdKTsgfSk7XG5cbiAgLy8gTk9URTogU2hvdWxkIHJldHVybiB1bmRlZmluZWQgaWYgUmVkaXMgcmV0dXJucyBhbiBlbXB0eSBvYmplY3RcbiAgcmV0dXJuIChvYmogJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGgpID8gb2JqIDogdW5kZWZpbmVkO1xufTtcblxuY29uc3Qgc2V0T2JqZWN0ID0gYXN5bmMgKHtcbiAga2V5LFxuICBkYXRhLFxuICBzdHJpbmdpZnlBcnJheSxcbn0pID0+IHtcbiAgY29uc3QgZGF0YVdpdGhTdHJpbmdpZnkgPSBkYXRhO1xuICBzdHJpbmdpZnlBcnJheS5mb3JFYWNoKChwcm9wKSA9PiB7IGRhdGFXaXRoU3RyaW5naWZ5W3Byb3BdID0gSlNPTi5zdHJpbmdpZnkoZGF0YVdpdGhTdHJpbmdpZnlbcHJvcF0pOyB9KTtcbiAgY29uc3Qga2V5VmFsdWVzID0gY29udmVydE9iamVjdFRvQXJyYXkoZGF0YVdpdGhTdHJpbmdpZnkpO1xuICBhd2FpdCByZWRpc0NsaWVudC5oc2V0KGtleSwgLi4ua2V5VmFsdWVzKTtcbn07XG5cbmNsYXNzIENhY2hlIHtcbiAgc3RhdGljIGdldFByb2R1Y3QgPSBhc3luYyAocHJvZHVjdElkKSA9PiB7XG4gICAgbGV0IHByb2R1Y3Q7XG4gICAgaWYgKHByb2R1Y3RJZCkge1xuICAgICAgcHJvZHVjdCA9IGF3YWl0IGdldE9iamVjdCh7XG4gICAgICAgIGtleTogYHByb2R1Y3RzOiR7cHJvZHVjdElkfWAsXG4gICAgICAgIHBhcnNlQXJyYXk6IFtdLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICBwcm9kdWN0LmlkID0gTnVtYmVyKHByb2R1Y3QuaWQpO1xuICAgICAgcHJvZHVjdC50cnVlVG9TaXplQ2FsY3VsYXRpb24gPSBOdW1iZXIocHJvZHVjdC50cnVlVG9TaXplQ2FsY3VsYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZHVjdDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3RJZCwgcHJvZHVjdCkgPT4ge1xuICAgIGF3YWl0IHNldE9iamVjdCh7XG4gICAgICBrZXk6IGBwcm9kdWN0czoke3Byb2R1Y3RJZH1gLFxuICAgICAgZGF0YTogcHJvZHVjdCxcbiAgICAgIHN0cmluZ2lmeUFycmF5OiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTaG9lID0gYXN5bmMgKHNob2VJZCkgPT4ge1xuICAgIGxldCBzaG9lO1xuICAgIGlmIChzaG9lSWQpIHtcbiAgICAgIHNob2UgPSBhd2FpdCBnZXRPYmplY3Qoe1xuICAgICAgICBrZXk6IGBzaG9lczoke3Nob2VJZH1gLFxuICAgICAgICBwYXJzZUFycmF5OiBbXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hvZSkge1xuICAgICAgc2hvZS5pZCA9IE51bWJlcihzaG9lLmlkKTtcbiAgICAgIHNob2UucHJvZHVjdElkID0gTnVtYmVyKHNob2UucHJvZHVjdElkKTtcbiAgICB9XG4gICAgcmV0dXJuIHNob2U7XG4gIH1cblxuICBzdGF0aWMgc2V0U2hvZSA9IGFzeW5jIChzaG9lSWQsIHNob2UpID0+IHtcbiAgICBhd2FpdCBzZXRPYmplY3Qoe1xuICAgICAga2V5OiBgc2hvZXM6JHtzaG9lSWR9YCxcbiAgICAgIGRhdGE6IHNob2UsXG4gICAgICBzdHJpbmdpZnlBcnJheTogW10sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0UmV2aWV3cyA9IGFzeW5jIChwcm9kdWN0SWQpID0+IHtcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcmVkaXNDbGllbnQuc21lbWJlcnMoYHByb2R1Y3RzOiR7cHJvZHVjdElkfTpyZXZpZXdzYCk7XG4gICAgcmV0dXJuIHJldmlld3MubWFwKChyZXZpZXcpID0+IEpTT04ucGFyc2UocmV2aWV3KSk7XG4gIH1cblxuICBzdGF0aWMgc2V0UmV2aWV3cyA9IGFzeW5jIChwcm9kdWN0SWQsIHJldmlld3MpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1Jldmlld3MgPSBhd2FpdCBDYWNoZS5nZXRSZXZpZXdzKHByb2R1Y3RJZCk7XG4gICAgY29uc3QgdHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uID0gY2FsY3VsYXRlVHRzKFsuLi5leGlzdGluZ1Jldmlld3MsIC4uLnJldmlld3NdKTtcbiAgICBhd2FpdCByZWRpc0NsaWVudC5zZXQoYHByb2R1Y3RzOiR7cHJvZHVjdElkfTp0cnVlVG9TaXplQ2FsY3VsYXRpb25gLCB0cnVlVG9TaXplQ2FsY3VsYXRpb24pO1xuICAgIGNvbnN0IHN0cmluZ2lmaWVkUmV2aWV3cyA9IHJldmlld3MubWFwKChyZXZpZXcpID0+IEpTT04uc3RyaW5naWZ5KHJldmlldykpO1xuICAgIGF3YWl0IHJlZGlzQ2xpZW50LnNhZGQoYHByb2R1Y3RzOiR7cHJvZHVjdElkfTpyZXZpZXdzYCwgLi4uc3RyaW5naWZpZWRSZXZpZXdzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUcnVlVG9TaXplQ2FsY3VsYXRpb24gPSBhc3luYyAocHJvZHVjdElkKSA9PiB7XG4gICAgY29uc3QgdHRzQ2FsYyA9IGF3YWl0IHJlZGlzQ2xpZW50LmdldChgcHJvZHVjdHM6JHtwcm9kdWN0SWR9OnRydWVUb1NpemVDYWxjdWxhdGlvbmApO1xuICAgIHJldHVybiB0dHNDYWxjO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhY2hlO1xuIl19
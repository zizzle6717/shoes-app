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
const store_1 = __importDefault(require("../store"));
exports.getShoes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield store_1.default.getShoes({});
        return res.send({
            shoes: response.rows,
        });
    }
    catch (err) {
        return res.status(500).send({
            message: 'Failed to fetch shoe(s).',
            error: err.message,
        });
    }
});
exports.getShoe = (req, res) => {
    const { shoeId } = req.params;
    return store_1.default.getShoes({ id: shoeId })
        .then((shoeRes) => {
        if (!shoeRes.rows.length) {
            throw new Error('NotFound');
        }
        return shoeRes;
    })
        .then((shoeRes) => {
        const shoe = shoeRes.rows[0];
        return store_1.default.getReviews({
            productId: shoe.productId,
        }).then((reviewRes) => {
            shoe.reviews = reviewRes.rows;
            return res.send(shoe);
        });
    })
        .catch((err) => {
        if (err && err.message === 'NotFound') {
            return res.status(404).send({
                statusCode: 404,
                message: 'Shoe not found.',
            });
        }
        return res.status(500).send({
            message: 'Failed to fetch shoe.',
            error: err.message,
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUVoQixRQUFBLFFBQVEsR0FBRyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztZQUNkLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSTtTQUNyQixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztTQUNuQixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFOUIsT0FBTyxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ2xDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDaEIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QixPQUFPLGVBQUssQ0FBQyxVQUFVLENBQUM7WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFFOUIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDYixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUNyQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsaUJBQWlCO2FBQzNCLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTaG9lcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RvcmUuZ2V0U2hvZXMoe30pO1xuXG4gICAgcmV0dXJuIHJlcy5zZW5kKHtcbiAgICAgIHNob2VzOiByZXNwb25zZS5yb3dzLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBzaG9lKHMpLicsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaG9lID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgc2hvZUlkIH0gPSByZXEucGFyYW1zO1xuXG4gIHJldHVybiBzdG9yZS5nZXRTaG9lcyh7IGlkOiBzaG9lSWQgfSlcbiAgICAudGhlbigoc2hvZVJlcykgPT4ge1xuICAgICAgaWYgKCFzaG9lUmVzLnJvd3MubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90Rm91bmQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNob2VSZXM7XG4gICAgfSlcbiAgICAudGhlbigoc2hvZVJlcykgPT4ge1xuICAgICAgY29uc3Qgc2hvZSA9IHNob2VSZXMucm93c1swXTtcblxuICAgICAgcmV0dXJuIHN0b3JlLmdldFJldmlld3Moe1xuICAgICAgICBwcm9kdWN0SWQ6IHNob2UucHJvZHVjdElkLFxuICAgICAgfSkudGhlbigocmV2aWV3UmVzKSA9PiB7XG4gICAgICAgIHNob2UucmV2aWV3cyA9IHJldmlld1Jlcy5yb3dzO1xuXG4gICAgICAgIHJldHVybiByZXMuc2VuZChzaG9lKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIgJiYgZXJyLm1lc3NhZ2UgPT09ICdOb3RGb3VuZCcpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgbWVzc2FnZTogJ1Nob2Ugbm90IGZvdW5kLicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGZldGNoIHNob2UuJyxcbiAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfSk7XG59O1xuIl19
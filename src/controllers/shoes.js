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
            message: 'Failed to fetch shoes.',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUVoQixRQUFBLFFBQVEsR0FBRyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztZQUNkLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSTtTQUNyQixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztTQUNuQixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQSxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFOUIsT0FBTyxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ2xDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDaEIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QixPQUFPLGVBQUssQ0FBQyxVQUFVLENBQUM7WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFFOUIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDYixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUNyQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsaUJBQWlCO2FBQzNCLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTaG9lcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RvcmUuZ2V0U2hvZXMoe30pO1xuXG4gICAgcmV0dXJuIHJlcy5zZW5kKHtcbiAgICAgIHNob2VzOiByZXNwb25zZS5yb3dzLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBzaG9lcy4nLFxuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2hvZSA9IChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHNob2VJZCB9ID0gcmVxLnBhcmFtcztcblxuICByZXR1cm4gc3RvcmUuZ2V0U2hvZXMoeyBpZDogc2hvZUlkIH0pXG4gICAgLnRoZW4oKHNob2VSZXMpID0+IHtcbiAgICAgIGlmICghc2hvZVJlcy5yb3dzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdEZvdW5kJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzaG9lUmVzO1xuICAgIH0pXG4gICAgLnRoZW4oKHNob2VSZXMpID0+IHtcbiAgICAgIGNvbnN0IHNob2UgPSBzaG9lUmVzLnJvd3NbMF07XG5cbiAgICAgIHJldHVybiBzdG9yZS5nZXRSZXZpZXdzKHtcbiAgICAgICAgcHJvZHVjdElkOiBzaG9lLnByb2R1Y3RJZCxcbiAgICAgIH0pLnRoZW4oKHJldmlld1JlcykgPT4ge1xuICAgICAgICBzaG9lLnJldmlld3MgPSByZXZpZXdSZXMucm93cztcblxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoc2hvZSk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyICYmIGVyci5tZXNzYWdlID09PSAnTm90Rm91bmQnKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7XG4gICAgICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgICAgIG1lc3NhZ2U6ICdTaG9lIG5vdCBmb3VuZC4nLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBzaG9lLicsXG4gICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcbiJdfQ==
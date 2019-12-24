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
const Cache_1 = __importDefault(require("../store/Cache"));
const calculateTts_1 = __importDefault(require("../utilities/calculateTts"));
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
        }).then((reviewsRes) => {
            shoe.reviews = reviewsRes.rows.map((row) => ({ id: row.id, trueToSizeScore: row.trueToSizeScore }));
            let trueToSizeCalculation;
            return Cache_1.default.getTrueToSizeCalculation(shoe.productId)
                .then((ttsCalc) => {
                trueToSizeCalculation = ttsCalc;
                if (!trueToSizeCalculation) {
                    trueToSizeCalculation = calculateTts_1.default(reviewsRes.rows);
                }
                shoe.trueToSizeCalculation = trueToSizeCalculation;
                return res.send(shoe);
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUE2QjtBQUM3QiwyREFBbUM7QUFDbkMsNkVBQXFEO0FBRXhDLFFBQUEsUUFBUSxHQUFHLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3pDLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJO1NBQ3JCLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ25CLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUU5QixPQUFPLGVBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDbEMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdCLE9BQU8sZUFBSyxDQUFDLFVBQVUsQ0FBQztZQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVwRyxJQUFJLHFCQUFxQixDQUFDO1lBQzFCLE9BQU8sZUFBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ2xELElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNoQixxQkFBcUIsR0FBRyxPQUFPLENBQUM7Z0JBRWhDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtvQkFDMUIscUJBQXFCLEdBQUcsc0JBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3ZEO2dCQUVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztnQkFFbkQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNiLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ3JDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxpQkFBaUI7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBDYWNoZSBmcm9tICcuLi9zdG9yZS9DYWNoZSc7XG5pbXBvcnQgY2FsY3VsYXRlVHRzIGZyb20gJy4uL3V0aWxpdGllcy9jYWxjdWxhdGVUdHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2hvZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0b3JlLmdldFNob2VzKHt9KTtcblxuICAgIHJldHVybiByZXMuc2VuZCh7XG4gICAgICBzaG9lczogcmVzcG9uc2Uucm93cyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggc2hvZXMuJyxcbiAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNob2UgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBzaG9lSWQgfSA9IHJlcS5wYXJhbXM7XG5cbiAgcmV0dXJuIHN0b3JlLmdldFNob2VzKHsgaWQ6IHNob2VJZCB9KVxuICAgIC50aGVuKChzaG9lUmVzKSA9PiB7XG4gICAgICBpZiAoIXNob2VSZXMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3RGb3VuZCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2hvZVJlcztcbiAgICB9KVxuICAgIC50aGVuKChzaG9lUmVzKSA9PiB7XG4gICAgICBjb25zdCBzaG9lID0gc2hvZVJlcy5yb3dzWzBdO1xuXG4gICAgICByZXR1cm4gc3RvcmUuZ2V0UmV2aWV3cyh7XG4gICAgICAgIHByb2R1Y3RJZDogc2hvZS5wcm9kdWN0SWQsXG4gICAgICB9KS50aGVuKChyZXZpZXdzUmVzKSA9PiB7XG4gICAgICAgIHNob2UucmV2aWV3cyA9IHJldmlld3NSZXMucm93cy5tYXAoKHJvdykgPT4gKHsgaWQ6IHJvdy5pZCwgdHJ1ZVRvU2l6ZVNjb3JlOiByb3cudHJ1ZVRvU2l6ZVNjb3JlIH0pKTtcblxuICAgICAgICBsZXQgdHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uO1xuICAgICAgICByZXR1cm4gQ2FjaGUuZ2V0VHJ1ZVRvU2l6ZUNhbGN1bGF0aW9uKHNob2UucHJvZHVjdElkKVxuICAgICAgICAgIC50aGVuKCh0dHNDYWxjKSA9PiB7XG4gICAgICAgICAgICB0cnVlVG9TaXplQ2FsY3VsYXRpb24gPSB0dHNDYWxjO1xuXG4gICAgICAgICAgICBpZiAoIXRydWVUb1NpemVDYWxjdWxhdGlvbikge1xuICAgICAgICAgICAgICB0cnVlVG9TaXplQ2FsY3VsYXRpb24gPSBjYWxjdWxhdGVUdHMocmV2aWV3c1Jlcy5yb3dzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hvZS50cnVlVG9TaXplQ2FsY3VsYXRpb24gPSB0cnVlVG9TaXplQ2FsY3VsYXRpb247XG5cbiAgICAgICAgICAgIHJldHVybiByZXMuc2VuZChzaG9lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIgJiYgZXJyLm1lc3NhZ2UgPT09ICdOb3RGb3VuZCcpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgbWVzc2FnZTogJ1Nob2Ugbm90IGZvdW5kLicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGZldGNoIHNob2UuJyxcbiAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfSk7XG59O1xuIl19
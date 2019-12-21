"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShoeReview = (req, res) => {
    const { reviewId } = req.params;
    return res.send({
        id: reviewId,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVhLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDM0MsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFaEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2QsRUFBRSxFQUFFLFFBQVE7S0FDYixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNob2VSZXZpZXcgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyByZXZpZXdJZCB9ID0gcmVxLnBhcmFtcztcblxuICByZXR1cm4gcmVzLnNlbmQoe1xuICAgIGlkOiByZXZpZXdJZCxcbiAgfSk7XG59Il19
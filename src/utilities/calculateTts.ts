export default (reviews) => reviews
  .map((review) => Number(review.trueToSizeScore))
  .reduce((cur, acc) => cur + acc, 0) / reviews.length;

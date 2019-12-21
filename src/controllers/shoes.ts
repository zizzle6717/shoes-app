

export const createShoeReview = (req, res) => {
  const { reviewId } = req.params;

  return res.send({
    id: reviewId,
  });
}
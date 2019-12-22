import store from '../store';

export const createReview = async (req, res) => {
  const { productId } = req.params;
  const { trueToSizeScore } = req.body;

  const review = {
    productId,
    trueToSizeScore,
  };

  try {
    const response = await store.createReview(review);

    return res.status(201).send({
      id: response.rows[0].id,
    });
  } catch (err) {
    return res.status(500).send({
      message: 'Failed to save review.',
      error: err.message,
    });
  }
};

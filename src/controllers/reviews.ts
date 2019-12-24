import store from '../store';

export const createReview = async (req, res) => {
  const { productId } = req.params;
  const { trueToSizeScore } = req.body;

  const review = {
    productId,
    trueToSizeScore,
  };

  try {
    const productRes = await store.getProducts({ id: productId });
    if (!productRes.rows.length) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Product not found.',
      });
    }

    const reviewRes = await store.createReview(review);

    return res.status(201).send({
      id: reviewRes.rows[0].id,
    });
  } catch (err) {
    return res.status(500).send({
      message: 'Failed to save review.',
      error: err.message,
    });
  }
};

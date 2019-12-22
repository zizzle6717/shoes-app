import store from '../store';

export const getShoes = async (req, res) => {
  try {
    const response = await store.getShoes({});

    return res.send({
      shoes: response.rows,
    });
  } catch (err) {
    return res.status(500).send({
      message: 'Failed to fetch shoe(s).',
      error: err.message,
    });
  }
};

export const getShoe = (req, res) => {
  const { shoeId } = req.params;

  return store.getShoes({ id: shoeId })
    .then((shoeRes) => {
      if (!shoeRes.rows.length) {
        throw new Error('NotFound');
      }

      return shoeRes;
    })
    .then((shoeRes) => {
      const shoe = shoeRes.rows[0];

      return store.getReviews({
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

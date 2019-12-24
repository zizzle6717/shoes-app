import store from '../store';
import Cache from '../store/Cache';
import calculateTts from '../utilities/calculateTts';

export const getShoes = async (req, res) => {
  try {
    const response = await store.getShoes({});

    return res.send({
      shoes: response.rows,
    });
  } catch (err) {
    return res.status(500).send({
      message: 'Failed to fetch shoes.',
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
      }).then((reviewsRes) => {
        shoe.reviews = reviewsRes.rows.map((row) => ({ id: row.id, trueToSizeScore: row.trueToSizeScore }));

        let trueToSizeCalculation;
        return Cache.getTrueToSizeCalculation(shoe.productId)
          .then((ttsCalc) => {
            trueToSizeCalculation = ttsCalc;

            if (!trueToSizeCalculation) {
              trueToSizeCalculation = calculateTts(reviewsRes.rows);
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

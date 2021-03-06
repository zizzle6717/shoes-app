import store from '../store';
import Cache from '../store/Cache';
import calculateTts from '../utilities/calculateTts';

export const getProducts = async (req, res) => {
  try {
    const response = await store.getProducts({});

    return res.status(200).send({
      products: response.rows,
    });
  } catch (err) {
    return res.status(500).send({
      message: 'Failed to fetch products.',
      error: err.message,
    });
  }
};

export const getProduct = (req, res) => {
  const { productId } = req.params;
  const promises: Promise<any>[] = [];

  const getProductsPromise = store.getProducts({
    id: productId,
  });

  const getShoesPromise = store.getShoes({
    productId,
  });

  const getReviewssPromise = store.getReviews({
    productId,
  });

  promises.push(getProductsPromise, getShoesPromise, getReviewssPromise);

  return Promise.all(promises)
    .then(([productRes, shoesRes, reviewsRes]) => {
      if (!productRes.rows.length) {
        return res.status(404).send({
          statusCode: 404,
          message: 'Product not found.',
        });
      }

      let trueToSizeCalculation;
      return Cache.getTrueToSizeCalculation(productId)
        .then((ttsCalc) => {
          trueToSizeCalculation = ttsCalc;

          if (!trueToSizeCalculation) {
            trueToSizeCalculation = calculateTts(reviewsRes.rows);
          }

          const product = productRes.rows[0];
          product.shoe = shoesRes.rows[0]
            ? {
              id: shoesRes.rows[0].id,
              name: shoesRes.rows[0].name,
            }
            : {};
          product.reviews = reviewsRes.rows.map((row) => ({ id: row.id, trueToSizeScore: row.trueToSizeScore }));
          product.trueToSizeCalculation = trueToSizeCalculation;

          return res.send(product);
        });
    })
    .catch((err) => res.status(500).send({
      message: 'Failed to fetch product.',
      error: err.message,
    }));
};

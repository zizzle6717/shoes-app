import store from '../store';

export const getProducts = async (req, res) => {
  try {
    const response = await store.getProducts({});

    return res.send({
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

      const trueToSizeCalculation = reviewsRes.rows
        .map((row) => Number(row.trueToSizeScore))
        .reduce((cur, acc) => cur + acc, 0) / reviewsRes.rows.length;

      const product = productRes.rows[0];
      product.shoe = shoesRes.rows[0];
      product.reviews = reviewsRes.rows;
      product.trueToSizeCalculation = trueToSizeCalculation;

      return res.send(product);
    })
    .catch((err) => res.status(500).send({
      message: 'Failed to fetch product.',
      error: err.message,
    }));
};

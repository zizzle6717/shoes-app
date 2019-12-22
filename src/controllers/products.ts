import store from '../store';

export const getProducts = async (req, res) => {
  const response = await store.getProducts({});

  return res.send({
    products: response.rows,
  });
}

export const getProduct = async (req, res) => {
  const { productId } = req.params;

  const response = await store.getProducts({
    id: productId,
  });

  return res.send(response.rows[0]);
}
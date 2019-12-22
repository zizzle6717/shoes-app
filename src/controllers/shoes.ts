import store from '../store';

export const getShoes = async (req, res) => {
  const response = await store.getShoes({});

  return res.send(response.rows);
}

export const getShoe = async (req, res) => {
  const { shoeId } = req.params;

  const response = await store.getShoes({
    id: shoeId,
  });

  return res.send(response.rows[0]);
}
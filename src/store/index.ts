import db from './db';
import Cache from './Cache';
import {
  getProductsQuery,
  getShoesQuery,
  getReviewsQuery,
  createReviewQuery,
} from './queries';

class Store {
  db;

  constructor(conn) {
    this.db = conn;
  }

  getProducts = async (conditions) => {
    let product;
    if (conditions.productId) {
      product = await Cache.getProduct(conditions.productId);
    }
    return product || this.db.read.query(getProductsQuery(conditions));
  }

  getShoes = async (conditions) => {
    let shoe;
    if (conditions.shoeId) {
      shoe = await Cache.getShoe(conditions.shoeId);
    }
    return shoe || this.db.read.query(getShoesQuery(conditions));
  }

  getReviews = (conditions) => this.db.read.query(getReviewsQuery(conditions))

  createReview = (review) => this.db.write.query(createReviewQuery(review));
}

export default new Store(db);

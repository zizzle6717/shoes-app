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
    if (conditions.id) {
      product = await Cache.getProduct(conditions.id);
    }
    return product ? Promise.resolve({ rows: [product] }) : this.db.read.query(getProductsQuery(conditions));
  }

  getShoes = async (conditions) => {
    let shoe;
    if (conditions.id) {
      shoe = await Cache.getShoe(conditions.id);
    }
    return shoe ? { rows: [shoe] } : this.db.read.query(getShoesQuery(conditions));
  }

  getReviews = async (conditions) => {
    let reviewsRes;
    if (conditions.productId) {
      reviewsRes = await Cache.getReviews(conditions.productId);
    }
    return (reviewsRes && reviewsRes.length) ? { rows: reviewsRes } : this.db.read.query(getReviewsQuery(conditions));
  }

  createReview = async (review) => {
    const reviewRes = await this.db.write.query(createReviewQuery(review));
    if (reviewRes.rows.length) {
      await Cache.setReviews(review.productId, [{ ...review, id: reviewRes.rows[0].id }]);
    }

    return reviewRes;
  };
}

export default new Store(db);

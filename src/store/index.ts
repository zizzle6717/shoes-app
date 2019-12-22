import db from './db';
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

  getProducts = (conditions) => this.db.read.query(getProductsQuery(conditions))

  getShoes = (conditions) => this.db.read.query(getShoesQuery(conditions))

  getReviews = (conditions) => this.db.read.query(getReviewsQuery(conditions))

  createReview = (review) => this.db.write.query(createReviewQuery(review));
}

export default new Store(db);

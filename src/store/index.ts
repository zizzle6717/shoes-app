import db from './db';
import {
  getProductsQuery,
  getShoesQuery,
  getReviewsQuery,
} from './queries';

class Store {
  db;

  constructor(conn) {
    this.db = conn;
  }

  getProducts = (conditions) => {
    return this.db.read.query(getProductsQuery(conditions))
  }

  getShoes = (conditions) => {
    return this.db.read.query(getShoesQuery(conditions))
  }

  getReviews = (conditions) => {
    return this.db.read.query(getReviewsQuery(conditions))
  }
}

export default new Store(db);
import express from 'express';
import {
  createShoeReview,
} from '../controllers/shoes';

const router = express.Router();

router.get('/reviews/:reviewId', createShoeReview);

export default router;

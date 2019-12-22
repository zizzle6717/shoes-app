import express from 'express';
import {
  createReview,
} from '../controllers/reviews';

const router = express.Router();

router.post('/:productId/reviews', createReview);

export default router;

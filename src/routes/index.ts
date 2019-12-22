import express from 'express';
import productsRouter from './productsRouter';
import reviewsRouter from './reviewsRouter';
import shoesRouter from './shoesRouter';

const router = express.Router();

router.use('/products', productsRouter);
router.use('/products', reviewsRouter);
router.use('/shoes', shoesRouter);

export default router;

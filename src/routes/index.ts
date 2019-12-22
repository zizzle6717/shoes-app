import express from 'express';
import productsRouter from './productsRouter';
import shoesRouter from './shoesRouter';

const router = express.Router();

router.use('/products', productsRouter);
router.use('/shoes', shoesRouter);

export default router;

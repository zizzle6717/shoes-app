import express from 'express';
import shoesRouter from './shoesRouter';

const router = express.Router();

router.use('/shoes', shoesRouter);

export default router;

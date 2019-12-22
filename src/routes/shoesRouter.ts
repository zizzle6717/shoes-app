import express from 'express';
import {
  getShoe,
  getShoes,
} from '../controllers/shoes';

const router = express.Router();

router.get('', getShoes);
router.get('/:shoeId', getShoe);

export default router;

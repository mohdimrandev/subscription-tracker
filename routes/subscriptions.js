import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createUserSubscription,
  getSubscriptions,
  updateUserSubscription,
  deleteUserSubscription
} from '../controllers/subscriptionController.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getSubscriptions)
  .post(createUserSubscription);

router.route('/:id')
  .put(updateUserSubscription)
  .delete(deleteUserSubscription);

export default router;
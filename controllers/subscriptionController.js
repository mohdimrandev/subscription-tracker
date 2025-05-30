import {
  createSubscription,
  getUserSubscriptions,
  updateSubscription,
  deleteSubscription
} from '../services/subscriptionService.js';

export const createUserSubscription = async (req, res, next) => {
  try {
    const subscription = await createSubscription(req.body, req.user.id);
    res.status(201).json({
      status: 'success',
      data: subscription
    });
  } catch (error) {
    next(error);
  }
};

export const getSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await getUserSubscriptions(req.user.id);
    res.status(200).json({
      status: 'success',
      data: subscriptions
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserSubscription = async (req, res, next) => {
  try {
    const subscription = await updateSubscription(
      parseInt(req.params.id),
      req.body,
      req.user.id
    );
    res.status(200).json({
      status: 'success',
      data: subscription
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUserSubscription = async (req, res, next) => {
  try {
    await deleteSubscription(parseInt(req.params.id), req.user.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
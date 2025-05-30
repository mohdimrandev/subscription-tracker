import prisma from '../lib/prisma.js';

export const createSubscription = async (subscriptionData, userId) => {
  return await prisma.subscription.create({
    data: {
      ...subscriptionData,
      userId,
    },
  });
};

export const getUserSubscriptions = async (userId) => {
  return await prisma.subscription.findMany({
    where: {
      userId,
    },
  });
};

export const updateSubscription = async (id, data, userId) => {
  return await prisma.subscription.update({
    where: {
      id,
      userId, // Ensures the subscription belongs to the user
    },
    data,
  });
};

export const deleteSubscription = async (id, userId) => {
  return await prisma.subscription.delete({
    where: {
      id,
      userId, // Ensures the subscription belongs to the user
    },
  });
};
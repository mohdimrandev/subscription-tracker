import { createUser, loginUser } from '../services/userService.js';

export const register = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({
      status: 'success',
      data: user
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);
    
    res.status(200).json({
      status: 'success',
      data: { user, token }
    });
  } catch (error) {
    next(error);
  }
};
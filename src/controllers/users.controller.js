import { User } from '../models/index.js';

export const getUserById = async (req, res) => {
  const { userDb } = req;

  return res.status(200).json(userDb);
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: 'user' });

    return res.status(200).json(customers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

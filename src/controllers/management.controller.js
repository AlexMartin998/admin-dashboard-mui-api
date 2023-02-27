import mongoose from 'mongoose';

import { User, Transaction } from '../models/index.js';

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' });

    return res.status(200).json(admins);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

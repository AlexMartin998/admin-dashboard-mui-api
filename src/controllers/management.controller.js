// import mongoose from 'mongoose';

import { AffiliateStat, User } from '../models/index.js';

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' });

    return res.status(200).json(admins);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

/* export const getUserPerformance = async (req, res) => {
  const { id } = req.params;

  try {
    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } }, // specific user

      {
        // like join in SQL
        $lookup: {
          from: 'affiliatestats', // model

          localField: '_id', // PK in User
          foreignField: 'userId', // FK in Affiliatestats model
          as: 'affiliateStats', // display this data as
        },
      },

      { $unwind: '$affiliateStats' }, // flat data (aplanar)
    ]);

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map(id => {
        return Transaction.findById(id);
      })
    );
    const filteredSaleTransactions = saleTransactions.filter(
      transaction => transaction !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}; */

export const getUserPerformance = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    const affiliateStats = await AffiliateStat.aggregate([
      {
        $match: {
          userId: user._id,
          affiliateSales: { $exists: true, $not: { $size: 0 } },
        },
      },

      {
        $lookup: {
          from: 'transactions',
          let: { sales: '$affiliateSales' },
          pipeline: [
            {
              $match: {
                $expr: { $in: ['$_id', '$$sales'] },
              },
            },
          ],
          as: 'sales',
        },
      },
    ]);

    res.status(200).json({ user, sales: affiliateStats[0].sales });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

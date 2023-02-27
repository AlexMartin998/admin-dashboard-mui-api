import { OverallStat } from '../models/index.js';

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();

    res.status(200).json(overallStats[0]); // 2021 in db
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

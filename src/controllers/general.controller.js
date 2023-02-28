import { OverallStat, Transaction } from '../models/index.js';

export const getDashboardStats = async (req, res) => {
  try {
    // hardcode values
    const hardData = {
      currentMonth: 'November',
      currentYear: 2021,
      currentDay: '2021-11-15',
    };

    /* Recent Transactions */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    /* Overall Stats */
    const overallStat = await OverallStat.find({
      year: hardData.currentYear,
    });
    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(
      ({ month }) => month === hardData.currentMonth
    );

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === hardData.currentDay;
    });

    return res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

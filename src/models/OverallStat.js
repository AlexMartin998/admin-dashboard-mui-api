import { model, Schema } from 'mongoose';

const OverallStatSchema = new Schema(
  {
    totalCustomers: {
      type: Number,
      required: [true, 'totalCustomers is required'],
    },
    yearlySalesTotal: {
      type: Number,
      required: [true, 'Yearly sales total is required'],
    },
    yearlyTotalSoldUnits: {
      type: Number,
      required: [true, 'yearlyTotalSoldUnits is required'],
    },
    year: {
      type: Number,
      // required: [true, 'Year is required'],
    },

    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    salesByCategory: {
      // js obj
      type: Map,
      of: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('OverallStat', OverallStatSchema);

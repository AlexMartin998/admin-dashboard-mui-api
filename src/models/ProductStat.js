import { model, Schema } from 'mongoose';

const ProductStatSchema = new Schema(
  {
    productId: {
      type: String,
      required: [true, 'Product ID is required'],
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
      required: [true, 'Year is required'],
    },

    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: {
      date: String,
      totalSales: Number,
      totalUnits: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('ProductStat', ProductStatSchema);

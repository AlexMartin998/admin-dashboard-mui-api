import { model, Schema, Types } from 'mongoose';

const TransactionSchema = new Schema(
  {
    userId: {
      type: String,
      required: [true, 'User ID is required'],
    },
    cost: {
      type: String,
      required: [true, 'Cost is required'],
    },

    products: {
      type: [Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('Transaction', TransactionSchema);

import { Schema, model, Types } from 'mongoose';

const AffiliateStatSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
    },

    affiliateSales: {
      type: [Types.ObjectId],
      ref: 'Transaction',
    },
  },
  { timestamps: true }
);

export default model('AffiliateStat', AffiliateStatSchema);

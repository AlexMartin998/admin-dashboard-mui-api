import { model, Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required!'],
      trim: true,
      min: 2,
      max: 100,
    },
    price: {
      type: Number,
      required: [true, 'Price is required!'],
      default: 0,
    },

    description: {
      type: String,
      required: [true, 'Description is required!'],
      trim: true,
      min: 2,
      max: 360,
    },
    category: {
      type: String,
      required: [true, 'Category is required!'],
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required!'],
      default: 1,
    },
    supply: {
      type: Number,
      required: [true, 'Supply is required!'],
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('Product', ProductSchema);

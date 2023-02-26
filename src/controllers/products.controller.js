import { Product, ProductStat } from '../models/index.js';

// TODO: function aggregations
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async product => {
        const stat = await ProductStat.find({ productId: product._id });

        return {
          ...product._doc,
          stat,
        };
      })
    );

    return res.status(200).json(productsWithStats);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export const getProductByID = async (req, res) => {
  const { productDb } = req;

  res.status(200).json(productDb);
};

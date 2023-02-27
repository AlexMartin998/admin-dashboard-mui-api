import { STAGE } from '../config/index.js';
import {
  OverallStat,
  Product,
  ProductStat,
  Transaction,
  User,
} from '../models/index.js';
import {
  dataProduct,
  dataProductStat,
  dataUser,
  dataTransaction,
  dataOverallStat,
} from './data/index.js';

export const executeSeed = async (req, res) => {
  try {
    if (STAGE !== 'dev')
      return res
        .status(401)
        .json({ message: 'Seed must be executed in dev mode' });

    await Promise.all([
      insertUsersData(),
      insertProductsData(),
      insertProductStatData(),
      insertTransactionsData(),
      insertOverallStatData(),
    ]);

    return res.status(200).json({ message: 'Seed excecuted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const insertUsersData = async () => {
  await User.deleteMany({});
  await User.insertMany(dataUser);
};

const insertProductsData = async () => {
  await Product.deleteMany({});
  await Product.insertMany(dataProduct);
};

const insertProductStatData = async () => {
  await ProductStat.deleteMany({});
  await ProductStat.insertMany(dataProductStat);
};

const insertTransactionsData = async () => {
  await Transaction.deleteMany({});
  await Transaction.insertMany(dataTransaction);
};

const insertOverallStatData = async () => {
  await OverallStat.deleteMany({});
  await OverallStat.insertMany(dataOverallStat);
};

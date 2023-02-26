import { Transaction, User } from '../models/index.js';
import getCountryIso3 from 'country-iso-2-to-3';

export const getUserById = async (req, res) => {
  const { userDb } = req;

  return res.status(200).json(userDb);
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: 'user' });

    return res.status(200).json(customers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export const getTransactions = async (req, res) => {
  // sort should look like this: {'field': 'userId', 'sort': 'desc'}
  const { page = 1, pageSize = 20, sort = null, search = '' } = req.query;

  // formatted sort should look like {userId: -1}
  const generateSort = () => {
    const sortParsed = JSON.parse(sort);
    const sortFormatted = {
      [sortParsed.field]: sortParsed.sort === 'asc' ? 1 : -1,
    };

    return sortFormatted;
  };

  const sortFormatted = sort ? generateSort() : {};

  try {
    const [transactions, total] = await Promise.all([
      Transaction.find({
        $or: [
          { cost: { $regex: new RegExp(search, 'i') } },
          { userId: { $regex: new RegExp(search, 'i') } },
        ],
      })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize),

      Transaction.countDocuments({
        // ...(search && { name: { $regex: search, $options: 'i' } }),
        $or: [
          { cost: { $regex: new RegExp(search, 'i') } },
          { userId: { $regex: new RegExp(search, 'i') } },
        ],
      }),
    ]);

    return res.status(200).json({ transactions, total });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    /* const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryIso3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }

      acc[countryISO3]++;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => ({ id: country, value: count })
    );

    return res.status(200).json(formattedLocations); 
    */
    const mappedLocations = new Map();
    users.forEach(({ country }) => {
      const countryISO3 = getCountryIso3(country);
      const count = mappedLocations.get(countryISO3) || 0;
      mappedLocations.set(countryISO3, count + 1);
    });

    const formattedLocations = Array.from(mappedLocations, ([id, value]) => ({
      id,
      value,
    }));

    return res.status(200).json(formattedLocations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

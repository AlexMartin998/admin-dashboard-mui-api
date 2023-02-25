import { STAGE } from '../config/index.js';
import { User } from '../models/index.js';
import { dataUser } from './data/index.js';

export const executeSeed = async (req, res) => {
  try {
    if (STAGE !== 'dev')
      return res
        .status(401)
        .json({ message: 'Seed must be executed in dev mode' });

    await insertUsersData();

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

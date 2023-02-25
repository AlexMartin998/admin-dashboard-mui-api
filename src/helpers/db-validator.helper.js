import { Product, User } from '../models/index.js';

export const idExistInDB = async (id, collection, req) => {
  let model;

  const checkInCollection = () => {
    if (!model) throw new Error(`${collection} ID: '${id} doesn't exist!`);
    req[collection + 'Db'] = model;
  };

  switch (collection) {
    case 'user':
      model = await User.findById(id);
      return checkInCollection();

    case 'product':
      model = await Product.findById(id);
      return checkInCollection();

    default:
      throw new Error('Something went wrong!');
  }
};

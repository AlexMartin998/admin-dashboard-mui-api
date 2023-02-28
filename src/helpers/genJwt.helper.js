'use strict';

import jwt from 'jsonwebtoken';

import { SECRETORKEY_JWT } from '../config/index.js';

export const genJWT = id => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id }, SECRETORKEY_JWT, { expiresIn: '1d' }, (err, token) => {
      if (err) {
        console.log(err);
        reject('Token could not be generated');
      }

      resolve(token);
    });
  });
};

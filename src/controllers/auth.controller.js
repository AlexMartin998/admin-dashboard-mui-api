'use strict';

import { User } from '../models/index.js';
import { genJWT } from '../helpers/index.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || password !== user.password)
      return res.status(400).json({
        message: [
          'There was a problem logging in. Check your email and password or create an account',
        ],
      });

    // Generate JWT
    const jwt = await genJWT(user.id);

    res.status(200).json({ msg: 'Successful login!', token: jwt, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Algo salió mal!' });
  }
};

export const renewJwt = async (req, res) => {
  const { authenticatedUser } = req;
  if (!authenticatedUser)
    res.status(401).json({ ok: false, msg: 'Unathorized!' });

  // Gen JWT
  const token = await genJWT(authenticatedUser.id);

  res.status(200).json({
    ok: true,
    token,
    user: authenticatedUser,
  });
};

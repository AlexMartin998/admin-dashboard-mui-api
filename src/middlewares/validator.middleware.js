import { param, validationResult } from 'express-validator';
import { idExistInDB } from '../helpers/index.js';

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const statusCode = 400;

    return res.status(statusCode).json({
      statusCode,
      message: errors.array().map(error => error.msg),
      error: 'Bad Request',
    });
  }

  return next();
};

const validateMongoId = () => [param('id', 'Invalid ID').isMongoId(), validate];

// users
export const userIdRules = () => [
  ...validateMongoId(),

  param('id').custom((id, { req }) => idExistInDB(id, 'user', req)),
  validate,
];

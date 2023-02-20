import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.post(
  '/login',
  validate(userValidator.login),
  userController.login,
);

module.exports = router;

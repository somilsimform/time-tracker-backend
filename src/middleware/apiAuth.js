import { errorResponse } from '../helpers';
import { User } from '../models';

const jwt = require('jsonwebtoken');

const apiAuth = async (req, res, next) => {
  console.log(req, "REQ");
  if (!(req.headers && req.headers['x-access-token'])) {
    return errorResponse(req, res, 'Token is not provided', 401);
  }
  const token = req.headers['x-access-token'];
  console.log(token, 'token');
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded.user;
    const user = await User.findOne({
      where: { email: req.user.email },
    });
    if (!user) {
      return errorResponse(req, res, 'User is not found in system', 401);
    }
    const reqUser = { ...user.get() };
    reqUser.userId = user.id;
    req.user = reqUser;
    return next();
  } catch (error) {
    return errorResponse(
      req,
      res,
      'Incorrect token is provided, try re-login',
      401,
    );
  }
};

export default apiAuth;

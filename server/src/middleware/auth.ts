import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export function authMWare(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401);
  }

  const accessToken = authHeader.split(' ')[1];

  let userData;
  try {
    userData = jwt.verify(accessToken, 'randomKey');
  } catch {
    return res.status(401);
  }

  req['user'] = userData;
  next();
}

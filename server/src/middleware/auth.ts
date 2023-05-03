import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export function authMWare(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401);
  }

  const accessToken = authHeader.split(' ')[1];

  const userData = jwt.verify(accessToken, 'randomKey');

  req['user'] = userData;
  next();
}

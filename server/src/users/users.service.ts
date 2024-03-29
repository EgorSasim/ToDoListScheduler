import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async registrate(login: string, password: string): Promise<string> {
    const isLoginExists = await this.userModel.findOne({ login: login });
    if (isLoginExists) {
      return '409'; //conflict code; cause user already exists;
    }
    const passwordHash = await bcrypt.hash(password, 3);
    const user = await this.userModel.create({
      login: login,
      password: passwordHash,
    });
    const accessToken = jwt.sign({ id: user.id, login: login }, 'randomKey', {
      expiresIn: '365d',
    });
    return accessToken;
  }

  async login(login: string, password: string): Promise<string> {
    const user = await this.userModel.findOne({ login: login });

    if (!user) {
      return '404'; //404 not found; if user with such name not found
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return '401'; //410 unauthorized; invalid credentials, password;
    }

    const accessToken = jwt.sign({ id: user.id, login: login }, 'randomKey', {
      expiresIn: '365d',
    });

    return accessToken;
  }
}

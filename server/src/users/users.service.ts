import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(login: string, password: string): Promise<CreateUserDto> {
    const user = await this.userModel.create({ login, password });
    const userDto = new CreateUserDto(user);
    return userDto;
  }
  public signIn(): void {
    return;
  }
}

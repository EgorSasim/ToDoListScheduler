import { Controller, HttpCode, Post, Req } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}
  @Post('registration')
  @HttpCode(200)
  async registrate(@Req() req: Request): Promise<{ token: string }> {
    const login = req.body['data']['login'];
    const password = req.body['data']['password'];
    console.log('login: ', login);
    console.log('password: ', password);
    const accessToken = await this.userService.registrate(login, password);
    return { token: accessToken };
  }

  @Post('login')
  @HttpCode(200)
  async login(@Req() req: Request): Promise<{ token: string }> {
    const login = req.body['data']['login'];
    const password = req.body['data']['password'];
    console.log('password: ', password);
    const accessToken = await this.userService.login(login, password);
    return { token: accessToken };
  }
}

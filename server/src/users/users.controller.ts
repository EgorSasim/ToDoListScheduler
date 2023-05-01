import { Controller, Post, Req } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('sign-in')
  public singIn(@Req() req: Request): void {
    this.usersService.signIn();
  }

  @Post('sign-up')
  public signUp(@Req() req: Request): void {
    this.usersService.signUp();
    return;
  }
}

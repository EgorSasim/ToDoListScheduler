import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('tasks', 200)
  getTasks(): void {
    console.log('redirect to get tasks');
  }
}

import { Controller, Delete, Get, HttpCode, Post, Req } from '@nestjs/common';
import { TasksService } from 'src/tasks/tasks.service';
import { Task } from 'src/tasks/tasks.typings';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('get')
  @HttpCode(200)
  public getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Delete('remove')
  public removeTask(@Req() req: Request): void {
    const id: number = req.body['id'];
    console.log('req: ', req.body['id']);
    this.tasksService.removeTask(id);
    console.log('this tasks: ', this.tasksService.TASKS);
  }

  @Post('add')
  public addTask(): void {
    console.log('add task');
  }
}

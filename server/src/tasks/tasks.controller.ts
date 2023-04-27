import { Controller, Get, HttpCode } from '@nestjs/common';
import { TASKS } from 'src/tasks/tasks.constants';
import { Task } from 'src/tasks/tasks.typings';

@Controller('tasks')
export class TasksController {
  @Get('get')
  @HttpCode(200)
  getTasks(): Task[] {
    return TASKS;
  }

  @Get('sort')
  sortTasks(): string {
    return 'sort tasks';
  }

  @Get('remove')
  removeTask(): string {
    return 'remove task';
  }

  @Get('add')
  addTask(): string {
    return 'add task';
  }
}

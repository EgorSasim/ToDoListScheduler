import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
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

  @Get(':id')
  public getTask(@Param() params: any): Task {
    return this.tasksService.getTask(params['id']);
  }

  @Delete('remove')
  @HttpCode(200)
  public removeTask(@Req() req: Request): void {
    const id: number = req.body['id'];
    this.tasksService.removeTask(id);
  }

  @Post('add')
  @HttpCode(200)
  public addTask(@Req() req: Request): void {
    this.tasksService.addTask(req.body['task']);
  }

  @Put('update')
  @HttpCode(200)
  public updateTask(@Req() req: Request): void {
    this.tasksService.updateTasks(req.body['task']);
  }
}

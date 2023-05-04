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
import { UserTask } from 'src/tasks/tasks.typings';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('get')
  @HttpCode(200)
  async getTasks(@Req() req: Request): Promise<UserTask[]> {
    const userId = req['user']['id'];
    const tasks = await this.tasksService.getTasks(userId);
    return tasks;
  }

  @Get(':id')
  async getTask(@Param() params: any): Promise<UserTask> {
    const task = await this.tasksService.getTask(params['id']);
    return task;
  }

  @Delete('remove')
  @HttpCode(200)
  async removeTask(@Req() req: Request): Promise<void> {
    const id: string = req.body['id'];
    await this.tasksService.removeTask(id);
  }

  @Post('add')
  @HttpCode(200)
  async addTask(@Req() req: Request): Promise<void> {
    const userId = req['user']['id'];
    await this.tasksService.addTask(req.body['task'], userId);
    return;
  }

  @Put('update')
  @HttpCode(200)
  async updateTask(@Req() req: Request): Promise<void> {
    await this.tasksService.updateTasks(req.body['task']);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { Task } from 'src/tasks/schemas/task.schema';
import { UserTask } from 'src/tasks/tasks.typings';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getTasks(userId: string): Promise<UserTask[]> {
    const tasks = await this.taskModel.find({ user: userId });
    const tasksDto = tasks.map((task) => {
      return new CreateTaskDto(task);
    });
    return tasksDto;
  }

  async getTask(id: string): Promise<UserTask> {
    const task = await this.taskModel.findById(id);
    return new CreateTaskDto(task);
  }

  async removeTask(id: string): Promise<void> {
    await this.taskModel.findByIdAndRemove(id);
  }

  async addTask(task: UserTask, userId: string): Promise<void> {
    await this.taskModel.create({ ...task, user: userId });
  }

  async updateTasks(task: UserTask): Promise<void> {
    await this.taskModel.findByIdAndUpdate(task.id, task);
  }
}

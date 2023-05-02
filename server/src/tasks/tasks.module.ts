import { Module } from '@nestjs/common';
import { TasksController } from 'src/tasks/tasks.controller';
import { TasksService } from 'src/tasks/tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from 'src/tasks/schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

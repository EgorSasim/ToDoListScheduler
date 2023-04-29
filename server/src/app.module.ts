import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { AppController } from 'src/app.controller';
import { TasksService } from 'src/tasks/tasks.service';

@Module({
  imports: [],
  controllers: [TasksController, AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { AppController } from 'src/app.controller';

@Module({
  imports: [],
  controllers: [TasksController, AppController],
  providers: [AppService],
})
export class AppModule {}

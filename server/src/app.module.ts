import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from 'src/tasks/tasks.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    // MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
})
export class AppModule {}

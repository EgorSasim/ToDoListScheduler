import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from 'src/tasks/tasks.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://egorsasim:Travamurava16@cluster0.nwipwrh.mongodb.net/to-do-list?authSource=admin&replicaSet=atlas-xu6137-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
    ),
  ],
})
export class AppModule {}

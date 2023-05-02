import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  app.enableCors();
  await app.listen(3000);
  await mongoose.connect(
    'mongodb+srv://egorsasim:OverTheRainbow228@cluster0.nwipwrh.mongodb.net/to-do-list?authSource=admin&replicaSet=atlas-xu6137-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
  );
}
bootstrap();

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/user.schema';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ require: true })
  id: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  date: Date;

  @Prop()
  completed: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

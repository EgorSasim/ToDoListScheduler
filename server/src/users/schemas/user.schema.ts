import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ require: true })
  login: string;

  @Prop({ require: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

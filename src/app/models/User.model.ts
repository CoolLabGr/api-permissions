import { Schema, model } from 'mongoose'
import {
  userSchemaDefinition, 
  userSchemaOptions, 
  preSave, 
  comparePassword,
  IUser,
  IUserModel
} from './User.model.util'


const UserSchema: Schema = new Schema(userSchemaDefinition, userSchemaOptions)

UserSchema.pre('save', preSave);
UserSchema.methods.comparePassword = comparePassword

export const User: IUserModel = model<IUser, IUserModel>('User', UserSchema)
export default User
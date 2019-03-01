import { HookNextFunction, Document, SchemaOptions, SchemaDefinition, Model } from 'mongoose'
import { genSalt, hash, compare } from 'bcryptjs'


export interface IUserDocument extends Document {
  email: string;
  name: string;
  password: string;
}
export interface IUser extends IUserDocument {
  comparePassword(password: string): boolean; 
}

export interface IUserModel extends Model<IUser> {
  hashPassword(password: string): boolean;
}

export const userSchemaDefinition: SchemaDefinition = {
  username: { 
    type: String,
    required: true,
    trim: true,
    index: { unique: true }
  },
  email: { 
    type: String,
    required: true,
    trim: true,
    index: { unique: true }
  },
  password: { type: String, required: true }
}

export const userSchemaOptions: SchemaOptions = {
  timestamps: true
}

const SALT_WORK_FACTOR: number = 10
export async function preSave(next: HookNextFunction): Promise<any> 
{
  const user: IUserDocument = this

  if (!user.isModified('password')) return next() // only hash the password if it has been modified (or is new)

  try {
    const salt = await genSalt(SALT_WORK_FACTOR) // generate a salt
    const hashed = await hash(user.password, salt) // hash the password along with our new salt
  
    user.password = hashed
    next()
  } catch (error) { 
    console.log('User.model preSave Error.')
    next(error) 
  }
}

export async function comparePassword(candidatePassword: string): Promise<boolean>
{
  return await compare(candidatePassword, this.password)
}

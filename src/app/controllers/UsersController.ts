import User from '../models/User.model'
import { Request, Response } from 'express';

class UsersController {
  
  async fetchAll(req: Request, res: Response) {
    console.log('fetching the Users...')

    // const users = await User.find()
    res.json({ users: await User.find() })
  }


  fetchUser() {}
}

export default new UsersController

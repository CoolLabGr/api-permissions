import { Router } from 'express'
import {Request, Response, NextFunction} from 'express-serve-static-core'
import UsersController from '../../controllers/UsersController';

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('<h1>API Index Page</h1>')
  res.end()
})

router.get('/users', UsersController.fetchAll)

router.get('/users/:id', (req: Request, res: Response) => {
  res.send(`<h1>User ${req.params.id}</h1>`)
  res.end()
})
export default router

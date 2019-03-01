import * as express from 'express'
import apiRoutes from './routes/api'

const app = express()
app.use('/api', apiRoutes)

export default app
// app.listen(8080, () => console.log('Server is up at http://localhost:8080'))
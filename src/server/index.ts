import * as http from 'http'
import app from '../app';

const PORT: number = 8080;
const HOST: string = 'localhost';

const server = http.createServer(app)

server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...')
    setTimeout(() => {
      server.close()
      server.listen(PORT, HOST)
    }, 1000)
  }
})

server.on('listening', () => console.log(`Server is running on http://${HOST}:${PORT}`))


export const startServer = () => server.listen(PORT, HOST)


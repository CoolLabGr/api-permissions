import { connection, connect, ConnectionOptions } from 'mongoose'


const options: ConnectionOptions = {
  useNewUrlParser: true
}
export async function connectDB(uri) {
  connection.on('connected', () => console.log('Connected with mongoDB.'))

  return await connect(uri, options)

}

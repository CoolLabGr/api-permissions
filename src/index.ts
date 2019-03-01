import { startServer } from "./server"
import { connectDB } from "./utils/connect-db"

connectDB('mongodb://192.168.1.2:27017/testME').then(startServer)

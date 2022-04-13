import mongoose from 'mongoose'
import { dbURI } from './config/enviroment.js'

export function connectDb() {
  return mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

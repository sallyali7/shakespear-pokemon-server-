import mongoose from 'mongoose'


export function connectDb() {
  return mongoose.connect('mongodb://127.0.0.1/pokemon-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

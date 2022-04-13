import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  sprite: { type: String, required: true },
})

pokemonSchema.plugin(mongooseUniqueValidator)

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

export default Pokemon
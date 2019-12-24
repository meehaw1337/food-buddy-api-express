import { Schema, model } from 'mongoose'

const ingredientSchema = Schema({
    name: {
        type: String,
        required: true
    },
    categories: [String]
})

export default model('ingredients', ingredientSchema)
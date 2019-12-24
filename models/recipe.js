import { Schema, model, ObjectId } from 'mongoose'

const recipeSchema = Schema({
    name: {
        type: String,
        required: true
    },
    categories: [String],
    description: {
        type: String,
        required: true
    },
    ingredients: [{
        type: ObjectId,
        ref: 'ingredients'
    }],
    steps: [String],
    calories: Number
})

export default model('recipes', recipeSchema)


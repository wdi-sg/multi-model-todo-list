const mongoose = require('mongoose')

let todoSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: [5, 'Todo title must be at least 5 characters long']
  },
  description: String,
  completed: Boolean
})

let Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo

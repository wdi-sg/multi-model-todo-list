const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller')

router.route('/')
.get(todoController.list) // index => get all
.post(todoController.create) // create => post new todo

router.route('/:id')
.get(todoController.listOne) // show => get specific todo
.put(todoController.update) // update => update existing todo
.delete(todoController.delete) // delete

router.get('/new', todoController.new)
router.get('/:id/edit', todoController.edit)

module.exports = router

const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller')

router.get('/', todoController.list)

router.get('/new', todoController.new)

router.get('/:id', todoController.listOne)

router.get('/:id/edit', todoController.edit)

router.post('/', todoController.create)

router.put('/:id', todoController.update)

router.delete('/:id', todoController.delete)

module.exports = router

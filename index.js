const express = require('express')
const app = express()
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/myapp')

mongoose.Promise = global.Promise

app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(ejsLayouts)

app.set('view engine', 'ejs')

// new routes
const pageRouter = require('./routes/page_router')
app.use('/', pageRouter)

const todoRouter = require('./routes/todo_router')
app.use('/todos', todoRouter)

app.listen(process.env.PORT || 3000, function () {
  console.log('app is running')
})

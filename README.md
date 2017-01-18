# Multi Model Todo List

This is Part 5 of a series of labs working towards building your first full stack web app.

- [Part 1 - TDD todo list](https://github.com/wdi-sg/tdd-todo-list)
- [Part 2 - Mongo todo list](https://github.com/wdi-sg/mongo-todo-list)
- [Part 3 - Express todo list pt1](https://github.com/wdi-sg/express-todo-list-pt1)
- (optional) [Part 3.1 - Mocha, Chai and Supertest todo list](https://github.com/wdi-sg/mocha-todo-list)
- [Part 4 - Express todo list pt2](https://github.com/wdi-sg/express-todo-list-pt2)
- Part 5 - (this one)

So far you've built a full MVC Todo List Application. This is a great achievement but it's time to take it up a notch. In this Lab you'll be extending your Application to support multiple Models. 

## Exercise

Your Task is to Add a TodoList Model. A TodoList should contain at minimum:
- a Name
- a Color (you can use this as your page background-color)
- and include multiple Todos (accordingly each Todo belongs to a TodoList)

You'll need to decide whether to use Mongoose Embedding or Referecing for the Relationship. Spend 10 minutes discussing this with your Neighrbours to review the benefits of each and pick the right method for the job.

Try to use Nested Routing like below. 

- `GET /todolists`
- `POST /todolists`
- `GET /todolists/new`
- `GET /todolists/:id`
- `GET /todolists/:id/edit`
- `PUT /todolists/:id/`
- `DELETE /todolists/:id/`

- `GET /todolists/:list_id/todos` - List All the Todos that belong to the specified TodoList
- `POST /todolists/:list_id/todos` - Create a new Todo and link it to the specified TodoList
- `GET /todolists/:list_id/todos/new` - Render a form that allows a Todo to be added to the specified TodoList
- `GET /todolists/:list_id/todos/:id` - Render a page that shows the  a specific Todo from the specified TodoList
- `GET /todolists/:list_id/todos/:id/edit` - Render a form that allows editing of a specific Todo from the specified TodoList
- `PUT /todolists/:list_id/todos/:id/` - Update a specific Todo from the specified TodoList
- `DELETE /todolists/:list_id/todos/:id/` - Delete a specific Todo from the specified TodoList

The above routes will give you two params in your request object `req.list_id` & `req.id`. Depending on your choosen Storage approach, you will need to use these differently.

## Bonus:

- Nested Routes can get quite clunky. Try to use shallow nested routes instead. This means that you only have the id for a TodoList in the url when it is need, in other cases you retrieve it from the child object itself. For example...

- `GET /todolists/:list_id/todos` - List All the Todos that belong to the specified TodoList
- `POST /todolists/:list_id/todos` - Create a new Todo and link it to the specified TodoList
- `GET /todolists/:list_id/todos/new` - Render a form that allows a Todo to be added to the specified TodoList
- `GET /todos/:id` - Render a page that shows the  a specific Todo (the id is unique, so we don't need the parent list)
- `GET /todos/:id/edit` - Render a form that allows editing of a specific Todo
- `PUT /todos/:id/` - Update a specific Todo
- `DELETE /todos/:id/` - Delete a specific Todo


## Bonus Bonuses
- Allow a Todo to be reassigned it's parent TodoList from it's Edit Page
- Make Sure that Deleting a TodoList also deletes all of it's children

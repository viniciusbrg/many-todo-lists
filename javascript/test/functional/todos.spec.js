'use strict'

const { test, trait } = use('Test/Suite')('Todos')
const Todo = use('App/Models/Todo')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('it should be able to list all todos on the database', async ({ client }) => {
  const todoData = {
    name: 'My new todo',
    description: 'My todo description',
  }

  await Todo.create(todoData)

  const response = await client.get('/todos').end()

  response.assertStatus(200)
  response.assertJSONSubset([todoData])
})

test('it should be able to list a specific todo into the database', async ({ client }) => {
  const todoData = {
    name: 'My new todo',
    description: 'My todo description',
  }

  await Todo.create(todoData)

  const response = await client.get('/todos/1').end()

  response.assertStatus(200)
  response.assertJSONSubset(todoData)
})

test('it should be able to create a new todo on the database', async ({ client, assert }) => {
  const todoData = {
    name: 'My new todo',
    description: 'My todo description',
  }

  const response = await client.post('/todos').send(todoData).end()

  response.assertStatus(201)

  const createdTodo = response.body

  const todoInDatabase = await Todo.find(createdTodo.id)

  assert.deepEqual(todoInDatabase.toJSON(), createdTodo)
})

test('it should be able to edit existing todos on the database', async ({ client, assert}) => {
  const todoData = {
    name: 'My new todo',
    description: 'My todo description',
    id: 1
  }

  await Todo.create(todoData)

  const dataToUpdate = {
    name: 'My updated todo',
    description: 'My updated description',
  }

  const response = await client.put('/todos/1').send(dataToUpdate).end()

  response.assertStatus(200)

  const updatedTodo = response.body

  const todoInDatabase = await Todo.find(todoData.id)
  const todoJSON = todoInDatabase.toJSON()

  assert.deepEqual(todoJSON, updatedTodo)
  assert.include(todoJSON, dataToUpdate)
})

test('it should be able to delete an existing todo', async ({ client, assert }) => {
  const todoData = {
    name: 'My new todo',
    description: 'My todo description',
    id: 1
  }

  await Todo.create(todoData)

  const response = await client.delete('/todos/1').end()

  response.assertStatus(204)

  const todo = await Todo.find(todoData.id)

  assert.isNull(todo, 'the todo wasnt deleted from the database!');
})

'use strict'

const { test, trait } = use('Test/Suite')('Todos')
const Todo = use('App/Models/Todo')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('it should be able to list all todos on the database', async ({ assert, client }) => {
  const todoData = {
    name: 'My new todo',
    description: 'My todo description',
  }

  await Todo.create(todoData)

  const response = await client.get('/todos').end()

  response.assertStatus(200)
  response.assertJSONSubset([todoData])
})

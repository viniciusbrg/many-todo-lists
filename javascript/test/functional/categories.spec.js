'use strict'

const { test, trait } = use('Test/Suite')('Todos')
const Category = use('App/Models/Category')
const Todo = use('App/Models/Todo')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('DatabaseTransactions')

const API_ENDPOINT = '/categories'

test('it should be able to list all categories on the database', async ({ client }) => {
  const categoryData = {
    name: 'My new category',
    emoji: '😎',
  }

  await Category.create(categoryData)

  const response = await client.get(API_ENDPOINT).end()

  response.assertStatus(200)
  response.assertJSONSubset([categoryData])
})

test('it should be able to create a new category', async ({ assert, client }) => {
  const categoryData = {
    name: 'My new category',
    emoji: '😎',
  }

  const response = await client.post(API_ENDPOINT).send(categoryData).end()

  response.assertStatus(201)

  // assert category has been saved to database.
  const createdCategory = response.body
  const categoryInDatabase = await Category.find(createdCategory.id)

  assert.deepEqual(categoryInDatabase.toJSON(), createdCategory)
})

test("it should be able to show a specific category and it's todos", async ({ client }) => {
  const categoryData = {
    name: 'My new category',
    emoji: '😎',
  }

  const createdCategory = await Category.create(categoryData)

  const todos = await Factory
    .model('App/Models/Todo')
    .createMany(3, { category_id: createdCategory.id })

  const response = await client
    .get(`${API_ENDPOINT}/${createdCategory.id}`)
    .send(categoryData).end()
  response.assertStatus(200)

  const expectedResponse = {
    ...createdCategory.toJSON(),
    todos: todos.map(todo => todo.toJSON())
  }

  response.assertJSONSubset(expectedResponse)
})

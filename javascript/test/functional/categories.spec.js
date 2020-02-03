'use strict'

const { test, trait } = use('Test/Suite')('Todos')
const Category = use('App/Models/Category')
const Todo = use('App/Models/Todo')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('it should be able to list all categories on the database', async ({ client }) => {
  const categoryData = {
    name: 'My new category',
    emoji: '😎',
  }

  await Category.create(categoryData)

  const response = await client.get('/categories').end()

  response.assertStatus(200)
  response.assertJSONSubset([categoryData])
})

test('it should be able to create a new category', async ({ assert, client }) => {
  const categoryData = {
    name: 'My new category',
    emoji: '😎',
  }

  const response = await client.post('/categories').send(categoryData).end()

  response.assertStatus(201)

  // assert category has been saved to database.
  const createdCategory = response.body
  const categoryInDatabase = await Category.find(createdCategory.id)

  assert.deepEqual(categoryInDatabase.toJSON(), createdCategory)
})

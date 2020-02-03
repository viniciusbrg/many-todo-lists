'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Category = use('App/Models/Category')

Factory.blueprint('App/Models/Todo', (faker, i, data) => {
  return {
    name: faker.sentence({ words: 4 }),
    description: faker.sentence(),
    category_id: Category.getDefaultCategoryID(),
    ...data
  }
})

Factory.blueprint('App/Models/Category', (faker, i, data) => {
  return {
    name: faker.sentence({ words: 4 }),
    emoji: '🤓',
    ...data
  }
})

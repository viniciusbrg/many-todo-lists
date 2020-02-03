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

Factory.blueprint('App/Models/Todo', (faker) => {
  return {
    name: faker.sentence({ words: 4 }),
    description: faker.sentence()
  }
})

Factory.blueprint('App/Models/Category', (faker) => {
  return {
    name: faker.sentence({ words: 4 }),
    emoji: '🤓'
  }
})

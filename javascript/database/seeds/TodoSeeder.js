'use strict'

/*
|--------------------------------------------------------------------------
| TodoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TodoSeeder {
  async run () {
    const todos = await Factory
      .model('App/Models/Todo')
      .createMany(5)

    todos.forEach(todo => console.log(todo.toJSON()))
  }
}

module.exports = TodoSeeder

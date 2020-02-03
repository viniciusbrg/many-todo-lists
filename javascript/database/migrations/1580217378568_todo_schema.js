'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.timestamps()
      table.integer('category_id')
        .references('id')
        .inTable('categories')
        .unsigned()
        .notNullable()
      table.string('name', 100).notNullable()
      table.text('description')
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodoSchema

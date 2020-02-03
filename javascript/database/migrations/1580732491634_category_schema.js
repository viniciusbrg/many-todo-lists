'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Category = use('App/Models/Category')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('emoji', 1)
    })

    Category.create({
      id: Category.getDefaultCategoryID(),
      name: 'Default',
      emoji: '👋',
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema

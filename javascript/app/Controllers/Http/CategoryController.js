'use strict'

const Category = use('App/Models/Category')

class CategoryController {
  async index({ response }) {
    const categories = await Category.all()

    return response.status(200).json(categories)
  }

  async create({ request, response }) {
    const categoryData = request.only(['name', 'emoji'])

    const createdCategory = await Category.create(categoryData)

    return response.status(201).json(createdCategory)
  }

  async show({ response, params }) {
    const categoryId = params.id

    const category = await Category.find(categoryId)
    await category.load('todos')

    return response.status(200).json(category)
  }
}

module.exports = CategoryController

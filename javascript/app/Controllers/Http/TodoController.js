'use strict'

const Todo = use('App/Models/Todo')

class TodoController {
  async index({ response }) {
    const todos = await Todo.all()

    return response.status(200).json(todos)
  }

  async show({ params, response }) {
    const todo = await Todo.find(params.id)

    return response.status(200).json(todo)
  }

  async create({ request, response }) {
    const todoData = request.only(['name', 'description'])

    const createdTodo = await Todo.create(todoData)

    return response.status(201).json(createdTodo)
  }

  async edit({ params, request, response }) {
    const todoId = params.id
    const todo = await Todo.findOrFail(todoId)

    const dataToEdit = request.only(['name', 'description'])

    todo.merge(dataToEdit)
    await todo.save()

    return response.status(200).json(todo)
  }

  async delete({ params, response }) {
    const todoId = params.id
    const todo = await Todo.findOrFail(todoId)

    await todo.delete()

    return response.status(204).json({})
  }
}

module.exports = TodoController

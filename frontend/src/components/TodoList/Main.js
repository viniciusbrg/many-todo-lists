import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import api from '../../services/api'

function Main(props) {
  const { activeCategory } = props
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(function fetchTodos() {
    async function loadTodos() {
      if (activeCategory.id) {
        const apiResponse = await api.get(`/categories/${activeCategory.id}`)

        const todos = apiResponse.todos
        setTodos(todos)
      }
    }

    loadTodos()
  }, [activeCategory])

  async function createNewTodo(data) {
    const newTodo = await api.post('/todos', data)
    return newTodo
  }

  async function handleNewTodo() {
    if (newTodo === '') {
      return
    }

    const todoData = {
      name: newTodo,
      category_id: activeCategory.id,
    }

    const createdTodo = await createNewTodo(todoData)

    setTodos([...todos, createdTodo])
    setNewTodo('')
  }

  return (
    <div className="main-content">
      <TodoList
        setNewTodo={setNewTodo}
        handleNewTodo={handleNewTodo}
        todos={todos}
        activeCategory={activeCategory}
      />
    </div>
  )
}

export default Main

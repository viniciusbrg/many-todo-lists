import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import api from '../../services/api'

function Main(props) {
  const { activeCategory } = props
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  async function loadTodos() {
    const todos = await api.get('/todos')

    setTodos(todos)
  }

  useEffect(function fetchTodos() {
    loadTodos()
  }, [])

  async function createNewTodo(data) {
    const newTodo = await api.post('/todos', data)
    return newTodo
  }

  async function handleNewTodo() {
    if (newTodo === '') {
      return
    }

    const createdTodo = await createNewTodo({name: newTodo})

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

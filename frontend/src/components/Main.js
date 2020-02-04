import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import api from '../services/api'

function Main() {
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
    <div className="create-todo-bar">
      <input placeholder="+ Add new todo" type="text" onChange={e => setNewTodo(e.target.value)}></input>
      <button onClick={handleNewTodo}>+</button>
    </div>
    <div className="todo-list">
      <h1 className="todo-category">Comidas</h1>
      {
        todos.map(todo => <TodoItem key={todo.id} name={todo.name}/>)
      }
    </div>
  </div>
  )
}

export default Main

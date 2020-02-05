import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  const { setNewTodo, handleNewTodo, todos, activeCategory } = props

  return (
    <>
      <div className="create-todo-bar">
        <input
          placeholder="+ Add new todo"
          type="text"
          onChange={e => setNewTodo(e.target.value)} />
        <button onClick={handleNewTodo}>+</button>
      </div>
      <div className="todo-list">
        <h1 className="todo-category">
          <span role="img" aria-label="current category emoji">
            {activeCategory.emoji}
          </span>
          {activeCategory.name}
        </h1>
        {
          todos.map(todo => <TodoItem key={todo.id} name={todo.name}/>)
        }
      </div>
    </>
  )
}

export default TodoList

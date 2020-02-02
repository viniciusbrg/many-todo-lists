import React from 'react'

function TodoItem(props) {
  return (
    <section className="todo-item">
      <h1>{props.name}</h1>
      <div className="todo-item-buttons">
        <span>Editar...</span>
        <span>Deletar</span>
      </div>
    </section>
  )
}

export default TodoItem

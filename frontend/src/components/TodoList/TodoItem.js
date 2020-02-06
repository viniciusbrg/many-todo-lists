import React from 'react'

function TodoItem(props) {
  const { onClick } = props
  return (
    <section onClick={onClick} className="todo-item">
      <h1>{props.name}</h1>
      <div className="todo-item-buttons">
        <span>Editar...</span>
        <span>Deletar</span>
      </div>
    </section>
  )
}

export default TodoItem

import React, { useState } from 'react'
import api from '../../services/api'

function EditButton(props) {
  const { editDisabled, setDisableInputs, updateHandler } = props

  if (editDisabled) {
    return (
      <button onClick={ e => setDisableInputs(false) }
        className="edit-button">Edit</button>
    )
  }

  return (
    <button className="save-button"
      onClick={ e => updateHandler() }>Save Changes</button>
  )
}

function ShowTodo(props) {
  const { activeTodo } = props

  const [todoName, setTodoName] = useState(activeTodo.name)
  const [todoDescription, setTodoDescription] =
    useState(activeTodo.description ? activeTodo.description : '')
  const [disableInputs, setDisableInputs] = useState(true)

  function updateHandler() {
    const todoData = {
      name: todoName,
      description: todoDescription,
    }

    console.log(todoData)

    setDisableInputs(true)
  }

  return (
    <div className="main-content show-todo">
      <button className="return-button">Go back</button>
      <input className="todo-content"
        value={todoName}
        disabled={disableInputs}
        onChange={e => setTodoName(e.target.value)}
      />
      <input className="todo-content" value={todoDescription}
        placeholder={"Hey! Add a description here :)"}
        disabled={disableInputs}
        onChange={e => setTodoDescription(e.target.value)}
      />

      <EditButton
        editDisabled={disableInputs}
        setDisableInputs={setDisableInputs}
        updateHandler={updateHandler}
      />

      <button className="remove-button">Remove</button>
    </div>
  )
}

export default ShowTodo

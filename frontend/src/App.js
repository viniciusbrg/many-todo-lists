import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
        <div className="sidebar">
            <h1>Categorias</h1>
            <h2>Default</h2>
            <h2>Escola</h2>
            <h2>Estudos</h2>
            <h2>Faculdade</h2>
            <h2>Comidas</h2>
        </div>
        <div className="main-content">
            <div className="create-todo-bar">
                <input type="text"></input>
                <button>+</button>
            </div>
            <div className="todo-list">
                <h1 className="todo-category">Comidas</h1>
                <section className="todo-item">
                    <h1>Todo 1</h1>
                    <div className="todo-item-buttons">
                        <span>Editar...</span>
                        <span>Deletar</span>
                    </div>
                </section>
                <section className="todo-item">
                    <h1>Todo 1</h1>
                    <div className="todo-item-buttons">
                        <span>Editar...</span>
                        <span>Deletar</span>
                    </div>
                </section>
                <section className="todo-item">
                    <h1>Todo 1</h1>
                    <div className="todo-item-buttons">
                        <span>Editar...</span>
                        <span>Deletar</span>
                    </div>
                </section>
                <section className="todo-item">
                    <h1>Todo 1</h1>
                    <div className="todo-item-buttons">
                        <span>Editar...</span>
                        <span>Deletar</span>
                    </div>
                </section>
                <section className="todo-item">
                    <h1>Todo 1</h1>
                    <div className="todo-item-buttons">
                        <span>Editar...</span>
                        <span>Deletar</span>
                    </div>
                </section>
                <section className="todo-item">
                    <h1>Todo 1</h1>
                    <div className="todo-item-buttons">
                        <span>Editar...</span>
                        <span>Deletar</span>
                    </div>
                </section>
                <section className="todo-item">
                    <h1>Todo 1</h1>
                    <div className="todo-item-buttons">
                        <span>Editar...</span>
                        <span>Deletar</span>
                    </div>
                </section>
                <section className="todo-item">
                    <h1>Todo 1</h1>
                    <div className="todo-item-buttons">
                        <span>Editar...</span>
                        <span>Deletar</span>
                    </div>
                </section>
                <section className="todo-item">
                    <h1>Todo 1</h1>
                    <div className="todo-item-buttons">
                        <span>Editar...</span>
                        <span>Deletar</span>
                    </div>
                </section>

            </div>
        </div>
    </div>
  );
}

export default App;

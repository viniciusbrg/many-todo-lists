import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/TodoList/Main'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

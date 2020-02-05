import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/TodoList/Main'

function App() {
  const [ activeCategory, setActiveCategory ] = useState({})

  return (
    <div className="app-container">
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Main
        activeCategory={activeCategory}
      />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

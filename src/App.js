import React from 'react';
import './App.css';
import SimpleList from './SimpleList'
import ApiList from './ApiList'

function App() {
  return (
    <div className="App">
      <div className="left"><SimpleList /></div>
      <div className="right"><ApiList /></div>
    </div>
  );
}

export default App;

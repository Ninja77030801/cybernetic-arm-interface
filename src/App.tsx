import React from 'react';
import { useState, useRef } from 'react';
import client from './services/client'
import './App.css';

function App() {
  const [errorMessage, setError] = useState<string | null>(null)
  useRef(() => {
    client.connect()
    client.on('error', (err: any) => {
        setError(err.message)
    })
  })
  const sendDirection = (direction: string) => {
      client.emit('direction', direction)
      console.log(direction)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Control your cybernetic arm</h1>
        <p style={{color: "red"}}>{errorMessage}</p>
      </header>
      <div className="control-panel">
          <button onClick={() => sendDirection('w')}>Up</button>
          <button onClick={() => sendDirection('a')}>Left</button>
          <button onClick={() => sendDirection('s')}>Down</button>
          <button onClick={() => sendDirection('d')}>Right</button>
      </div>
    </div>
  );
}

export default App;

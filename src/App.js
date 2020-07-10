import React from 'react';
import { BadXSS } from './BadXSS';
import { GoodXSS } from './GoodXSS';
import { Sanitization } from './Sanitization';
import './App.css';

function App() {
  return (
    <div style={containerStyle}>
      <h1>React XSS Demo</h1>
      <BadXSS />
      <hr />
      <GoodXSS />
      <hr />
      <Sanitization />
    </div>
  );
}

const containerStyle = {
  color: 'white',
  background: '#0078D6',
  padding: '20px 20px 20px 20px',
}

export default App;

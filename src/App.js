import './App.css';
import React from 'react';
import Nav from './components/nav/nav';
import Sheet from './components/Sheet/Sheet';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main container">
        <Sheet/>
      </div>
    </div>
  );
}

export default App;

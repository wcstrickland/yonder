import './App.css';
import {Routes, Route} from "react-router-dom"
import React from 'react';
import MonsterSearchPage from './components/MonsterSearchPage/MonsterSearchPage'
import MonsterPage from './components/MonsterPage/MonsterPage';
import Roller from './components/Roller/Roller'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MonsterSearchPage/>} />
      <Route path="/monster/:id" element={<MonsterPage/>} />
      <Route path="/roller" element={<Roller />} />
      <Route path="/test" element={<Roller />} />
    </Routes>
  );
}

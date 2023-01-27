import './App.css';
import {Routes, Route} from "react-router-dom"
import React from 'react';
import MonsterSearchPage from './components/MonsterSearchPage/MonsterSearchPage'
import MonsterPage from './components/MonsterPage/MonsterPage';
import CharSheet from './components/CharSheet/CharSheet';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MonsterSearchPage/>} />
      <Route path="/monster/:id" element={<MonsterPage/>} />
    </Routes>
  );
}

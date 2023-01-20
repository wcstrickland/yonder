import './App.css';
import {Routes, Route} from "react-router-dom"
import React from 'react';
import HomePage from './components/HomePage/HomePage';
import MonsterSearchPage from './components/MonsterSearchPage/MonsterSearchPage'
import MonsterPage from './components/MonsterPage/MonsterPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/monsters" element={<MonsterSearchPage/>} />
      <Route path="/monster/:id" element={<MonsterPage/>} />
    </Routes>
  );
}

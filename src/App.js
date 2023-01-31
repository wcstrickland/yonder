import './App.css';
import {Routes, Route} from "react-router-dom"
import React from 'react';
import MonsterSearchPage from './components/MonsterSearchPage/MonsterSearchPage'
import MonsterPage from './components/MonsterPage/MonsterPage';
import FeatList from './components/FeatList/FeatList';
import FeatSearchPage from './components/FeatSearchPage/FeatSearchPage';
import FeatPage from './components/FeatPage/FeatPage'
import SpellPage from './components/SpellPage/SpellPage'
import SpellSearchPage from './components/SpellSearchPage/SpellSearchPage'
import SpellList from './components/SpellList/SpellList';
import ClassPage from './components/ClassPage/ClassPage';
import ClassSearchPage from './components/ClassSearchPage/ClassSearchPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MonsterSearchPage/>} />
      <Route path="/monster/:id" element={<MonsterPage/>} />
      <Route path="/feat/:id" element={<FeatPage/>} />
      <Route path="/feats" element={<FeatSearchPage/>} />
      <Route path="/spell/:id" element={<SpellPage/>} />
      <Route path="/classes" element={<ClassSearchPage/>} />
      <Route path="/class/:cls/:id" element={<ClassPage/>} />
      <Route path="/spells" element={<SpellSearchPage/>} />
      <Route path="/allspells" element={<SpellList/>} />
      <Route path="/allfeats" element={<FeatList/>} />
    </Routes>
  );
}

import React from 'react'
import './App.css';
import { Header } from './components/header/header';
import { Recherche } from './components/recherche/recherche';
import {Asset} from './components/cards/public/components/asset/asset.js'

export const App = () => {
  
  return (
    <div className="App">
      <Header/>
      <Recherche/>
      <Asset/>
    </div>
  );
}


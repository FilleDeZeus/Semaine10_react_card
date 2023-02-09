import React from 'react'
import './App.css';
import { Header } from './components/header/header';
import { Recherche } from './components/recherche/recherche';
import {Asset} from './components/cards/public/components/asset/asset.js'

export const App = () => {
  const [mode] = React.useState(false);

  const change = mode ? "light" : "dark";

  return (
    <div className={change} >
      <Header/>
      <Recherche/>
      <Asset />
    </div>
  );
}


import React from 'react';
import './App.css';
import {MainDatepicker} from "./components/main_datepicker/Main_datepicker";
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <h1>Super datepicker</h1>
      </header>
      <MainDatepicker />
    </div>
  );
}

export default App;

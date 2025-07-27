import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputModal } from 'src/shared/input-modal/InputModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Привет! Меня зовут Кирилл. Я frontend-разработчик c опытом более 2 лет, использующий React и на обучении хочу
          систематизировать свои знания. Telegram: @kirillefimov01
        </p>
        <InputModal></InputModal>
      </header>
    </div>
  );
}

export default App;

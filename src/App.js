import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
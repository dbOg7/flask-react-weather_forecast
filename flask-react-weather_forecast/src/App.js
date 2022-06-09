import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';

function App() {
  
  const [currentCity, setCurrentCity] = useState(0);
  const [currentWeather, setCurrentWeather] = useState(1);

  useEffect(()=> {
    fetch('/weather').then(res => res.json()).then(data => {
      setCurrentCity(data.city);
      setCurrentWeather(data.weather);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{currentCity}</p>
        <p>The weather is {currentWeather}</p>

      </header>
    </div>
  );
}


export default App;

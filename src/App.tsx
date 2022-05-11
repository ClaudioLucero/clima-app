import React from 'react';
import './App.css';
import SearchCities from './components/SearchCities/SearchCities';
import Favorites from './components/Favorites/Favorites';

const App:React.FC = () => (
  <div className="App">
    <div className="App-header" />
    <div className="App-body">
      <Favorites />
      <SearchCities />
    </div>
  </div>
);

export default App;
// npx eslint src

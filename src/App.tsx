/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import './App.css';
import SearchCities from './components/SearchCities/SearchCities';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <SearchCities />
      </div>
      <div className="App-body" />
    </div>
  );
}

export default App;

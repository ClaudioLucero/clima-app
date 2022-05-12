import React from 'react';
import './App.css';
import BodyClima from './components/BodyClima/BodyClima';

const App:React.FC = () => (
  <div className="App">
    <div className="App-header" />
    <div className="App-body">
      <BodyClima />
    </div>
  </div>
);

export default App;
// npx eslint src

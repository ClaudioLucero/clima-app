import React, { useEffect, useState } from 'react';
import './App.css';
import BodyClima from './components/BodyClima/BodyClima';

interface AppState {
  location: Location
}

const App: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);
  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        <div id="cloud-intro">
          <div className="App-header-font">ClimApp</div>
        </div>
      </div>
      <div className="App-body">
        {lon && lat
          ? <BodyClima lon={lon} lat={lat} />
          : <div>{status}</div>}
        {/* corregir */}
      </div>
    </div>
  );
};

export default App;
// npx eslint src

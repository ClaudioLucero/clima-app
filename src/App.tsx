import React, { useEffect, useState } from 'react';
import './App.css';
import BodyClima from './components/BodyClima/BodyClima';
import { WeatherProvider } from './components/Context/WeatherContext';

interface AppState {
  status:string | null
  lon: number | null
  lat: number | null
}

const App: React.FC = () => {
  const [status, setStatus] = useState<AppState['status']>(null);
  const [lat, setLat] = useState<AppState['lat']>(null);
  const [lon, setLon] = useState<AppState['lon']>(null);
  useEffect(() => {
    // verifico geolocalizacion del navegador
    if (!navigator.geolocation) {
      setStatus('* Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }, () => {
        setStatus('* Unable to retrieve your location');
      });
    }
  }, []);
  return (
    <WeatherProvider>
      <div className="App">
        <div className="App-header">
          <div id="cloud-intro">
            <div className="App-header-font">ClimApp</div>
          </div>
        </div>
        <div className="App-body">
          {lon && lat
            ? <BodyClima lon={lon} lat={lat} msg={null} />
            // en caso de no permitir o tener desactivada la gelolocalizacion
            : <div>{status}</div>}
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;

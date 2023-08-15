// Context/WeatherContext.tsx
import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { City } from '../../models/City';
import { Temp } from '../../models/Temp';

interface WeatherContextType {
  weatherData: City | null;
  updateWeatherData: (newData: City | null) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeatherContext = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<City | null>(null);

  const updateWeatherData = (newData: City | null) => {
    setWeatherData(newData);
  };

  const contextValue = useMemo(() => ({ weatherData, updateWeatherData }), [weatherData, updateWeatherData]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

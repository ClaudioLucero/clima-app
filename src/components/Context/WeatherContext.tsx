// Context/WeatherContext.tsx
import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

interface WeatherContextType {
  weatherData: any; // Ajusta el tipo de datos aquí
  updateWeatherData: (newData: any) => void; // Ajusta el tipo de datos aquí
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function useWeatherContext(): WeatherContextType {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
}

export function WeatherProvider({ children }: { children: ReactNode }): JSX.Element {
  const [weatherData, setWeatherData] = useState<any | null>(null); // Ajusta el tipo de datos aquí

  const updateWeatherData = (newData: any) => {
    setWeatherData(newData);
  };

  const contextValue = useMemo(() => ({ weatherData, updateWeatherData }), [weatherData, updateWeatherData]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}

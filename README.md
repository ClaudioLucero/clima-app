# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Node Version
16.5.0

## Npm Version
7.19.1

## React Version
^18.1.0

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Arquitectura de Componentes
```
< App >
      < BodyClima >
                  < Favorites /> 
                  < SearchCities >
                                 < ResultsCity />
                  < /SearchCities >
                  < CityData />
                  < NextTemps />
    < /BodyClima >
< /App >


## Inicio App
Al iniciar la aplicacion, solicita permisos para detectar latitud y longitud.Con los datos de geolocalización del navegador realiza la consulta del clima a la api de Openweathermap

## Favoritos
Inicialmente cuanta con 5 provincias favoritas guardadas por defecto, el usuario puede eliminar las provincias favoritas y agregar nuevas desde los resultados de busqueda.El limite de favoritos es de 5.

## Busquedas
Openweathermap proveé un archivo zip con todas las ciudades del mundo con sus respectivos id's, datos de latitud y longitud para poder consultar el clima.Se extrajeron los datos de las provincias argentinas y guardaron en el archivo ' provinces-arg-json'  en donde la aplicacion realiza las busquedas desde el buscador.

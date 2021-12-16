import React from 'react'
import { useAsync } from 'react-use'
import { AppRouter } from './components/AppRouter'
import { WeatherContext, SettingsContext } from './components/context'
import WeatherService from './api/WeatherService'
import {useInterval, useLocalStorage} from './components/hooks'

function App() {
  const [Weather, setWeather] = useLocalStorage('weather')
  const settingsState = useLocalStorage('settings')
  const state = useAsync(async() =>{
    const data = await new WeatherService().GetCurrentWeather('perm')
    setWeather(data)
  })

  useInterval(async() =>{
    const data = await new WeatherService().GetCurrentWeather('perm')
    setWeather(data)
  }, 60 * 1000)
  if (state.loading)
    return (
      <div>Loading...</div>
    )
  else 
    return (
      <SettingsContext.Provider value={settingsState}>
        <WeatherContext.Provider value={Weather}>
          <AppRouter />
        </WeatherContext.Provider>
      </SettingsContext.Provider>
    );
}

export default App;

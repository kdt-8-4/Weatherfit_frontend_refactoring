import { create } from 'zustand'

interface TEMP {
  temperatureMax: number | null
  setTemperatureMax: (tempMax: number | null) => void
}

export const WeatherTempMax = create<TEMP>(set => ({
  temperatureMax: 0,
  setTemperatureMax: tempMax => {
    set(() => ({ temperatureMax: tempMax }))
  },
}))

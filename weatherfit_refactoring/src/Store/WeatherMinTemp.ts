import { create } from 'zustand'

interface TEMP {
  temperatureMin: number | null
  setTemperatureMin: (tempMin: number | null) => void
}

export const WeatherTempMin = create<TEMP>(set => ({
  temperatureMin: 0,
  setTemperatureMin: tempMin => {
    set(() => ({ temperatureMin: tempMin }))
  },
}))

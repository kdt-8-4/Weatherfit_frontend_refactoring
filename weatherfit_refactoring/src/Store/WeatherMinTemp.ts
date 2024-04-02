import { create } from 'zustand'

interface TEMP {
  temperatureMin: number
  setTempMin: (tempMin: number) => void
}

export const WeatherTempMin = create<TEMP>(set => ({
  temperatureMin: 0,
  setTempMin: tempMin => {
    set(() => ({ temperatureMin: tempMin }))
  },
}))

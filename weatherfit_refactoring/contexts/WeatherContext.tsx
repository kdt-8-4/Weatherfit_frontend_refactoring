'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'

type WeatherType =
  | 'Clear'
  | 'Rain'
  | 'Thunderstorm'
  | 'Snow'
  | 'Mist'
  | 'Drizzle'
  | 'Clouds'
  | 'Fog'
  | 'Haze'
  | 'Sand'
interface WeatherProvider {
  icon: string | null
  tempNow: number | null
  tempMax: number | null
  tempMin: number | null
  address: string | null
  weather: WeatherType | null
}

export const WeatherContext = createContext<WeatherProvider>({
  icon: null,
  tempMax: null,
  tempMin: null,
  tempNow: null,
  address: null,
  weather: null,
})

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [temperature, setTemp] = useState<number>()
  const [temperatureMin, setTempMin] = useState<number>()
  const [temperatureMax, setTempMax] = useState<number>()
  const [weatherIcon, setIcon] = useState<string>()
  const [latitude_state, setLatitude] = useState<number>()
  const [longitude_state, setLongitude] = useState<number>()
  const [address, setAddress] = useState<string>()
  const [weather, setWeather] = useState<WeatherType>()

  // API Keys
  // openweathermap
  const API_KEY: string = 'e88170b7fa2aeadd4ba37bb1561a53f2'
  // KaKao
  const KAKAO_API_KEY: string = '3a6c3035c801405eaa71ebb9dc7f474b'

  useEffect(() => {
    const getLocation = async () => {
      try {
        // 위치 노출이 허용되어 있는지 확인하고 현재 위치 가져오기
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          },
        )

        // 위도와 경도 가져오기
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      } catch (error) {
        console.error('Error getting location:', error)
      }
    }

    getLocation()
  }, [])

  useEffect(() => {
    const getWeather = async () => {
      try {
        // OpenWeatherMap에서 위치 기반 날씨 정보 불러오기
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude_state}&lon=${longitude_state}&appid=${API_KEY}&units=metric`,
        )
        const weatherData = await weatherResponse.json()

        // 날씨 정보 저장하기
        setIcon(weatherData.weather[0].icon)
        setWeather(weatherData.weather[0].main)
        setTemp(weatherData.main.temp.toFixed(1))
        setTempMax(weatherData.main.temp_max.toFixed(1))
        setTempMin(weatherData.main.temp_min.toFixed(1))
      } catch (error) {
        console.error('Error getting location:', error)
      }
    }

    if (latitude_state && longitude_state) getWeather()
  }, [latitude_state, longitude_state])

  useEffect(() => {
    const getAddress = async () => {
      try {
        const addressResponse = await fetch(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude_state}&y=${latitude_state}`,
          {
            method: 'GET',
            headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
          },
        )
        const addressData = await addressResponse.json()
        setAddress(
          addressData.documents[0].address.region_1depth_name +
            ' ' +
            addressData.documents[0].address.region_2depth_name,
        )
      } catch (error) {
        console.error('Error getting location:', error)
      }
    }

    getAddress()
  }, [temperatureMin])

  return (
    <>
      {weatherIcon &&
        temperature &&
        temperatureMax &&
        weather &&
        temperatureMin &&
        address && (
          <WeatherContext.Provider
            value={{
              icon: weatherIcon,
              weather: weather,
              address: address,
              tempMax: temperatureMax,
              tempMin: temperatureMin,
              tempNow: temperature,
            }}>
            {children}
          </WeatherContext.Provider>
        )}
    </>
  )
}

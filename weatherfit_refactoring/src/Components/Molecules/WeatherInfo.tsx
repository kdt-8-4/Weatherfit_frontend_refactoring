'use client'
import { WeatherIcon } from '@/Store/WeatherIcon'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'
import { WeatherTemp } from '@/Store/WeatherTemp'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TextStore, { TextStyle } from '../Atoms/Text/TextStore'

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

export default function WeatherInfo() {
  const API_KEY = 'fa3eba61f243af3e8e69086462763172'
  const KAKAO_API_KEY = '3a6c3035c801405eaa71ebb9dc7f474b'

  const { temperature, setTemp } = WeatherTemp()
  const { temperatureMin, setTempMin } = WeatherTempMin()
  const { temperatureMax, setTempMax } = WeatherTempMax()
  const { weatherIcon, setIcon } = WeatherIcon()

  const [weat, setWeat] = useState<WeatherType | undefined>()
  const [address, setAddress] = useState<string | undefined>()

  const weatherValue = {
    Clear: '맑음',
    Rain: '비',
    Thunderstorm: '뇌우',
    Snow: '눈',
    Mist: '옅은 안개',
    Drizzle: '이슬비',
    Clouds: '흐림',
    Fog: '안개',
    Haze: '실안개',
  }

  const weatherImage = {
    Clear: 'clear.png',
    Rain: 'rain.png',
    Thunderstorm: 'thunderstorm.png',
    Snow: 'snow.png',
    Mist: 'mist.png',
    Drizzle: 'rain.png',
    Clouds: 'clouds.png',
    Fog: 'mist.png',
    Haze: 'mist.png',
  }

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          },
        )

        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
        )
        const weatherData = await weatherResponse.json()
        setTemp(weatherData.main.temp.toFixed(1))
        setTempMax(weatherData.main.temp_max.toFixed(1))
        setTempMin(weatherData.main.temp_min.toFixed(1))
        setWeat(weatherData.weather[0].main)
        setIcon(weatherData.weather[0].icon)

        console.log('데이터', weatherData)

        const addressResponse = await fetch(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
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

    getLocation()
  }, [])

  console.log(
    `온도 : ${temperature} ,최고온도 ${temperatureMax},최저온도 ${temperatureMin}, 날씨 : ${weat}, 아이콘: ${weatherIcon}`,
  )

  console.log('주소: ', address)

  return (
    <div className="relative h-[300px] flex justify-center">
      {weat && (
        <Image
          src={`/images/${weatherImage[weat]}`}
          alt="weatherimage"
          width={390}
          height={300}
        />
      )}
      <div className="absolute top-[140px] flex flex-col items-center">
        <TextStore
          textStyle={TextStyle.GMARKET_TEXT}
          style="text-[#616161] text-[14px]">
          {address}
        </TextStore>
        <TextStore
          textStyle={TextStyle.NANUM_TEXT}
          style="text-white text-[45px]">
          {temperature} ℃
        </TextStore>
        <TextStore textStyle={TextStyle.GMARKET_TEXT} style="text-black">
          {weat && weatherValue[weat as keyof typeof weatherValue]}
        </TextStore>
        <TextStore
          textStyle={TextStyle.GMARKET_TEXT}
          style="text-[#616161] text-[14px]">
          최고 {temperatureMax}℃ / 최저 {temperatureMin}℃
        </TextStore>
      </div>
    </div>
  )
}

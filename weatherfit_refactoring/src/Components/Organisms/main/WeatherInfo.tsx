'use client'
import { WeatherContext } from '../../../../contexts/WeatherContext'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import TextStore, { TextStyle } from '../../Atoms/Text/TextStore'

export default function WeatherInfo() {
  const { icon, tempNow, tempMax, tempMin, weather, address } =
    useContext(WeatherContext)
  // const API_KEY = 'fa3eba61f243af3e8e69086462763172'
  // const KAKAO_API_KEY = '3a6c3035c801405eaa71ebb9dc7f474b'

  // const { temperature, setTemp } = WeatherTemp()
  // const { temperatureMin, setTempMin } = WeatherTempMin()
  // const { temperatureMax, setTempMax } = WeatherTempMax()
  // const { weatherIcon, setIcon } = WeatherIcon()

  // const [weat, setWeat] = useState<WeatherType | undefined>()
  // const [address, setAddress] = useState<string | undefined>()

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
    Sand: '황사',
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
    Sand: 'sand.png',
  }

  // useEffect(() => {
  //   const getLocation = async () => {
  //     try {
  //       const position = await new Promise<GeolocationPosition>(
  //         (resolve, reject) => {
  //           navigator.geolocation.getCurrentPosition(resolve, reject)
  //         },
  //       )

  //       const latitude = position.coords.latitude
  //       const longitude = position.coords.longitude

  //       const weatherResponse = await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
  //       )
  //       const weatherData = await weatherResponse.json()
  //       setTemp(weatherData.main.temp.toFixed(1))
  //       setTempMax(weatherData.main.temp_max.toFixed(1))
  //       setTempMin(weatherData.main.temp_min.toFixed(1))
  //       setWeat(weatherData.weather[0].main)
  //       setIcon(weatherData.weather[0].icon)

  //       console.log('데이터', weatherData)

  //       const addressResponse = await fetch(
  //         `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
  //         {
  //           method: 'GET',
  //           headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
  //         },
  //       )
  //       const addressData = await addressResponse.json()
  //       setAddress(
  //         addressData.documents[0].address.region_1depth_name +
  //           ' ' +
  //           addressData.documents[0].address.region_2depth_name,
  //       )
  //     } catch (error) {
  //       console.error('Error getting location:', error)
  //     }
  //   }

  //   getLocation()
  // }, [])

  // console.log(
  //   `온도 : ${temperature} ,최고온도 ${temperatureMax},최저온도 ${temperatureMin}, 날씨 : ${weat}, 아이콘: ${weatherIcon}`,
  // )

  return (
    <article className="relative h-[300px] flex justify-center">
      {weather && (
        <Image
          src={`/images/${weatherImage[weather]}`}
          alt="weatherimage"
          width={400}
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
          {tempNow} ℃
        </TextStore>
        <TextStore textStyle={TextStyle.GMARKET_TEXT} style="text-black">
          {weather && weatherValue[weather as keyof typeof weatherValue]}
        </TextStore>
        <TextStore
          textStyle={TextStyle.GMARKET_TEXT}
          style="text-[#616161] text-[14px]">
          최고 {tempMax}℃ / 최저 {tempMin}℃
        </TextStore>
      </div>
    </article>
  )
}

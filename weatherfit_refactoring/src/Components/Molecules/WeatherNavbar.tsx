'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
//Zustand
import { WeatherIcon } from '@/Store/WeatherIcon'
import { WeatherTemp } from '@/Store/WeatherTemp'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'

export default function WeatherNavbar() {
  const API_KEY = 'fa3eba61f243af3e8e69086462763172'
  const KAKAO_API_KEY = '3a6c3035c801405eaa71ebb9dc7f474b'

  const { temperature, setTemp } = WeatherTemp()
  const { temperatureMin, setTempMin } = WeatherTempMin()
  const { temperatureMax, setTempMax } = WeatherTempMax()
  const { weatherIcon, setIcon } = WeatherIcon()

  const [weat, setWeat] = useState<string | undefined>()
  const [address, setAddress] = useState<string | undefined>()

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          },
        )

        const latitude = position.coords.latitude
        // console.log("위도", latitude);
        const longitude = position.coords.longitude
        // console.log("경도", longitude);

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
        )
        const weatherData = await weatherResponse.json()
        setTemp(weatherData.main.temp.toFixed(1))
        // max = weatherData.main.temp_max.toFixed(1);
        setTempMax(weatherData.main.temp_max.toFixed(1))
        setTempMin(weatherData.main.temp_min.toFixed(1))
        setWeat(weatherData.weather[0].main)
        setIcon(weatherData.weather[0].icon)

        console.log('데이터', weatherData)
        // console.log(`온도 : ${temp} ,최고온도 ${max},최저온도 ${min}, 날씨 : ${weat}`);

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

        // console.log(address);
      } catch (error) {
        console.error('Error getting location:', error)
      }
    }

    getLocation()
  }, [])

  return (
    <div className="flex justify-between items-center text-[12px] border-t border-b border-slate-100 px-2">
      <div className="flex items-center">
        <Image
          src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
          alt="weatherIcon"
          width={50}
          height={50}
          loading="lazy"
        />
        <span className="font-gmarketsans font-thin pt-1">{temperature}℃</span>
      </div>
      <div className="px-1">
        <span className="font-gmarketsans font-thin px-1">
          최고 {temperatureMax}℃
        </span>
        <span className="font-gmarketsans font-thin px-1">
          최저 {temperatureMin}℃
        </span>
      </div>
    </div>
  )
}

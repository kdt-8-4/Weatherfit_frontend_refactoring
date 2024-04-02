'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
//Zustand
import { WeatherIcon } from '@/Store/WeatherIcon'
import { WeatherTemp } from '@/Store/WeatherTemp'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'

export default function WeatherNavbar() {
  // const API_KEY = 'fa3eba61f243af3e8e69086462763172'
  const API_KEY = 'e88170b7fa2aeadd4ba37bb1561a53f2'
  const KAKAO_API_KEY = '3a6c3035c801405eaa71ebb9dc7f474b'

  const { temperature, setTemp } = WeatherTemp()
  const { temperatureMin, setTempMin } = WeatherTempMin()
  const { temperatureMax, setTempMax } = WeatherTempMax()
  const { weatherIcon, setIcon } = WeatherIcon()
  const [latitude_state, setLatitude] = useState<number>()
  const [longitude_state, setLongitude] = useState<number>()
  const [address, setAddress] = useState<string | undefined>()

  // 렌더링 속도 비교해보기

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
      console.log('위도', latitude_state, '경도', longitude_state)
      try {
        // OpenWeatherMap에서 위치 기반 날씨 정보 불러오기
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude_state}&lon=${longitude_state}&appid=${API_KEY}&units=metric`,
        )
        const weatherData = await weatherResponse.json()

        // 날씨 정보 저장하기
        setIcon(weatherData.weather[0].icon)
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

    if (address) getAddress()
  }, [temperatureMin])

  return (
    <article className="flex justify-between items-center text-[12px] border-t border-b border-slate-100 px-2">
      <section className="flex items-center">
        <Image
          src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
          alt="weatherIcon"
          width={50}
          height={50}
          loading="lazy"
        />
        <span className="font-gmarketsans font-thin pt-1">{temperature}℃</span>
      </section>
      <section className="px-1">
        <span className="font-gmarketsans font-thin px-1">
          최고 {temperatureMax}℃
        </span>
        <span className="font-gmarketsans font-thin px-1">
          최저 {temperatureMin}℃
        </span>
      </section>
    </article>
  )
}

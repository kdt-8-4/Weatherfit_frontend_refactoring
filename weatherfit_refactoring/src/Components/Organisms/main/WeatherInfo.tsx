'use client'
import { WeatherContext } from '../../../../contexts/WeatherContext'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import TextStore, { TextStyle } from '../../Atoms/Text/TextStore'

export default function WeatherInfo() {
  const { icon, tempNow, tempMax, tempMin, weather, address } =
    useContext(WeatherContext)

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

  return (
    <article
      className="relative h-[300px] flex justify-center"
      tabIndex={0}
      aria-label="오늘의 날씨 정보입니다. 현재 위치, 온도, 날씨, 최고최저 온도 순으로 표시되어 있습니다.">
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
          style="text-[#616161] text-[14px]"
          tabIndex={0}>
          {address}
        </TextStore>
        <TextStore
          textStyle={TextStyle.NANUM_TEXT}
          style="text-white text-[45px]"
          tabIndex={0}>
          {tempNow} ℃
        </TextStore>
        <TextStore
          textStyle={TextStyle.GMARKET_TEXT}
          style="text-black"
          tabIndex={0}>
          {weather && weatherValue[weather as keyof typeof weatherValue]}
        </TextStore>
        <TextStore
          textStyle={TextStyle.GMARKET_TEXT}
          style="text-[#616161] text-[14px]"
          tabIndex={0}>
          최고 {tempMax}℃ / 최저 {tempMin}℃
        </TextStore>
      </div>
    </article>
  )
}

'use client'
import { useContext, useEffect } from 'react'
import Image from 'next/image'
import { WeatherContext } from '../../../contexts/WeatherContext'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'

export default function WeatherNavbar() {
  const { icon, tempMax, tempMin, tempNow } = useContext(WeatherContext)
  const { temperatureMax, setTemperatureMax } = WeatherTempMax()
  const { temperatureMin, setTemperatureMin } = WeatherTempMin()

  useEffect(() => {
    setTemperatureMax(tempMax)
    setTemperatureMin(tempMin)
  }, [])

  return (
    <article className="flex justify-between items-center text-[12px] border-t border-b border-slate-100 px-2">
      <section className="flex items-center" tabIndex={0}>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="weatherIcon과 현재 온도입니다."
          width={50}
          height={50}
          loading="lazy"
          tabIndex={0}
        />
        <span className="font-gmarketsans font-thin pt-1" tabIndex={0}>
          {tempNow}℃
        </span>
      </section>
      <section className="px-1">
        <span className="font-gmarketsans font-thin px-1" tabIndex={0}>
          최고 {temperatureMax}℃
        </span>
        <span className="font-gmarketsans font-thin px-1" tabIndex={0}>
          최저 {temperatureMin}℃
        </span>
      </section>
    </article>
  )
}

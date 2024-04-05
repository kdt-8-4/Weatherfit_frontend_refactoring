'use client'
import { useContext } from 'react'
import Image from 'next/image'
import { WeatherContext } from '../../../contexts/WeatherContext'

export default function WeatherNavbar() {
  const { icon, tempMax, tempMin, tempNow } = useContext(WeatherContext)

  return (
    <article className="flex justify-between items-center text-[12px] border-t border-b border-slate-100 px-2">
      <section className="flex items-center">
        <Image
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="weatherIcon"
          width={50}
          height={50}
          loading="lazy"
        />
        <span className="font-gmarketsans font-thin pt-1">{tempNow}℃</span>
      </section>
      <section className="px-1">
        <span className="font-gmarketsans font-thin px-1">최고 {tempMax}℃</span>
        <span className="font-gmarketsans font-thin px-1">최저 {tempMin}℃</span>
      </section>
    </article>
  )
}

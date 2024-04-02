import Image from 'next/image'
import { WeatherContext } from '../../../../contexts/WeatherContext'
import { useContext } from 'react'

export default function Weather({
  initialWeatherIcon,
}: {
  initialWeatherIcon?: FEEDDATA_detail['weatherIcon']
}) {
  const { icon } = useContext(WeatherContext)
  return (
    <div className="flex mb-3 items-center w-fit">
      <p className="font-gmarketsans pt-[5px] mr-3 text-sm">
        {initialWeatherIcon ? '업로드 당시 날씨' : '업로드 날씨'}
      </p>
      <Image
        src={
          initialWeatherIcon
            ? initialWeatherIcon
            : `https://openweathermap.org/img/wn/${icon}.png`
        }
        alt="날씨"
        width={20}
        height={20}
        loading="lazy"
      />
    </div>
  )
}

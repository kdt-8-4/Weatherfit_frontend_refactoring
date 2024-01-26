import { WeatherIcon } from '@/Store/WeatherIcon'
import Image from 'next/image'

export default function UploadWeather() {
  const { weatherIcon } = WeatherIcon()
  return (
    <div className="flex mb-3 items-center w-fit">
      <p className="font-gmarketsans pt-[5px] mr-3 text-sm">업로드 날씨</p>
      {weatherIcon && (
        <Image
          src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
          alt="날씨"
          width={10}
          height={10}
          loading="lazy"
        />
      )}
    </div>
  )
}

'use client'

import Image from 'next/image'

export default function EditWeather({
  weatherIcon,
}: {
  weatherIcon: FEEDDATA_detail['weatherIcon']
}) {
  return (
    <div className="flex mb-3 items-center w-fit">
      <p className="font-gmarketsans pt-[5px] mr-3 text-sm">업로드 당시 날씨</p>
      <Image
        src={weatherIcon}
        alt="날씨"
        width={20}
        height={20}
        loading="lazy"
      />
    </div>
  )
}

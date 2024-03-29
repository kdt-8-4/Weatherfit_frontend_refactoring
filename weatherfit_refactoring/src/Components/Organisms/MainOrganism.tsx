'use client'

import { useEffect, useState } from 'react'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'
import BestThreeCodi from '../Molecules/BestThreeCodi'
import bestCodi from '../../../public/dummy_data/bestCodi.json'
import Image from 'next/image'

export default function MainOrganism() {
  const { temperatureMax } = WeatherTempMax()
  const { temperatureMin } = WeatherTempMin()

  // const [data, setData] = useState<FEEDDATA_detail | undefined>([undefined])
  const [data, setData] = useState<FEEDDATA_detail[]>(
    bestCodi as unknown as FEEDDATA_detail[],
  )
  console.log(data)

  // useEffect(() => {
  //   const getBestCodi = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://www.jerneithe.site/board/tops?temp_min=${temperatureMax}&temp_max=${temperatureMin}`,
  //         {
  //           method: 'GET',
  //         },
  //       )

  //       const data = await response.json()
  //       setData(data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   getBestCodi()
  // }, [temperatureMax, temperatureMin])

  // console.log(temperatureMax, temperatureMin)

  return (
    <main>
      <div className="w-full text-center">다른 캐스터들은 이렇게 입었어요!</div>
      <div className="w-full  flex flex-col items-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/8371/8371286.png"
          alt="crown"
          width={30}
          height={30}
        />
        <span>BEST 3</span>
      </div>
      <BestThreeCodi data={data} />
    </main>
  )
}

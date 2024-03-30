'use client'

import TextStore, { TextStyle } from '../Atoms/Text/TextStore'
import { useEffect, useState } from 'react'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'
import BestThreeCodi from '../Molecules/BestThreeCodi'
import bestCodi from '../../../public/dummy_data/bestCodi.json'
import Image from 'next/image'
import { useFetchGet } from '@/utils/useFetch/useFetchGet'

export default function MainOrganism() {
  const { temperatureMax } = WeatherTempMax()
  const { temperatureMin } = WeatherTempMin()

  const [data, setData] = useState<FEEDDATA_detail | undefined>()
  const bestCodiQueryKey = 'bestThreeCodis'
  const bestCodiUrl = `https://www.jerneithe.site/board/tops?temp_min=${temperatureMax}&temp_max=${temperatureMin}`
  const bestCodiOptions = { method: 'GET' }
  const { data: bestCodis, error } = useFetchGet(
    bestCodiQueryKey,
    bestCodiUrl,
    bestCodiOptions,
  )
  useEffect(() => {
    const getBestCodi = () => {
      setData(bestCodis)
      if (error) console.log('코디 불러오기 실패', error)
    }
    getBestCodi()
  }, [temperatureMax, temperatureMin])

  console.log(temperatureMax, temperatureMin)

  return (
    <main>
      <div className="w-full  flex flex-col items-center mt-[40px]">
        <TextStore
          textStyle={TextStyle.NANUM_TEXT}
          style="mb-[20px] text-[20px]">
          다른 캐스터들은 이렇게 입었어요!
        </TextStore>

        <Image
          src="https://cdn-icons-png.flaticon.com/128/8371/8371286.png"
          alt="crown"
          width={30}
          height={30}
        />
        <span className=" font-NanumSquareRound">BEST 3</span>
      </div>
      <BestThreeCodi data={data} />
    </main>
  )
}

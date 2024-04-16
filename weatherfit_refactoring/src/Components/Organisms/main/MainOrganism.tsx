'use client'

import TextStore, { TextStyle } from '../../Atoms/Text/TextStore'
import { useEffect, useState } from 'react'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'
import BestThreeCodi from '../../Molecules/post/BestThreeCodi'
import bestCodi from '../../../../public/dummy_data/bestCodi.json'
import Image from 'next/image'

export default function MainOrganism() {
  const { temperatureMax } = WeatherTempMax()
  const { temperatureMin } = WeatherTempMin()

  const [data, setData] = useState<FEEDDATA_detail | undefined>()
  // const [data, setData] = useState<FEEDDATA_detail[]>(
  //   bestCodi as unknown as FEEDDATA_detail[],
  // )
  // console.log(data)

  useEffect(() => {
    const getBestCodi = async () => {
      try {
        const response = await fetch(
          `https://www.jerneithe.site/board/tops?temp_min=${temperatureMax}&temp_max=${temperatureMin}`,
          {
            method: 'GET',
          },
        )

        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error(error)
      }
    }
    getBestCodi()
  }, [temperatureMax, temperatureMin])

  console.log(temperatureMax, temperatureMin)

  return (
    <section>
      <div className="w-full  flex flex-col items-center mt-[40px]">
        <TextStore
          textStyle={TextStyle.NANUM_TEXT}
          style="mb-[20px] text-[20px]"
          tabIndex={0}>
          다른 캐스터들은 이렇게 입었어요!
        </TextStore>

        <Image
          src="https://cdn-icons-png.flaticon.com/128/8371/8371286.png"
          alt="crown"
          width={30}
          height={30}
        />
        <span
          className=" font-NanumSquareRound"
          tabIndex={0}
          aria-label="현재 온도 기준 좋아요를 제일 많이 받은 3가지 코디를 보여줍니다.">
          BEST 3
        </span>
      </div>
      <BestThreeCodi data={data} />
    </section>
  )
}

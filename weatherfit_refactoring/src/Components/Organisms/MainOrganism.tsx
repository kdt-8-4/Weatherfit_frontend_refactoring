'use client'

import { useEffect, useState } from 'react'
import { WeatherTempMax } from '@/Store/WeatherMaxTemp'
import { WeatherTempMin } from '@/Store/WeatherMinTemp'
import Best3Codi from '../Molecules/Best3Codi'

export default function MainOrganism() {
  const { temperatureMax } = WeatherTempMax()
  const { temperatureMin } = WeatherTempMin()

  const [data, setData] = useState<FEEDDATA_detail | undefined>(undefined)

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

  return (
    <>
      <Best3Codi data={data} />
    </>
  )
}

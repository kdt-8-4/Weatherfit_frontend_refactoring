'use client'

import { ReactNode, useEffect, useState } from 'react'
import TextStore, { TextStyle } from '../Atoms/Text/TextStore'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'

export default function WebView({ children }: { children: ReactNode }) {
  const [screenWide, setScreenWide] = useState<boolean>(true)

  useEffect(() => {
    const handleResize = () => {
      setScreenWide(window.innerWidth > 800)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    //메모리 누수 방지를 위한 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex">
      {screenWide ? (
        <div className="m-auto flex">
          <aside className="w-[400px] min-h-[844px] bg-white ">
            <TextStore textStyle={TextStyle.NANUM_TEXT} style="m-auto">
              기온별 옷차림은..
            </TextStore>
            <BoxStore
              boxStyle={BoxStyle.BOX_BLUE}
              style={`m-auto px-2 w-[97px] h-[30px] font-neurimboGothic text-[22px] pb-[7px] shadow-[7px_7px_1px] flex items-center`}>
              옷늘날씨
            </BoxStore>
            <div className="mt-[30px] font-Cafe24SsurroundAir">
              디자인 같이 해주세요ㅠㅠ
            </div>
          </aside>
          <div className="w-[400px] min-h-[844px] border-2">{children}</div>
        </div>
      ) : (
        <div className="m-auto">{children}</div>
      )}
    </div>
  )
}

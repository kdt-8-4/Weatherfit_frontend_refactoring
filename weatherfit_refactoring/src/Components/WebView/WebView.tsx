'use client'

import { ReactNode, useEffect, useState } from 'react'
import MainLogo from '../Molecules/logo/MainLogo'

export default function WebView({ children }: { children: ReactNode }) {
  const [screenWide, setScreenWide] = useState<boolean>(true)

  useEffect(() => {
    const handleResize = () => {
      setScreenWide(window.innerWidth > 1100)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    //메모리 누수 방지를 위한 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex justify-center h-[100vh]">
      {screenWide ? (
        <div className="m-auto flex">
          <aside className="w-[400px] min-h-[844px] bg-white ">
            <MainLogo />
          </aside>
          <div className="w-[400px] min-h-[844px] border-2">{children}</div>
        </div>
      ) : (
        <div className="m-auto w-[395px] min-h-[844px]">{children}</div>
      )}
    </div>
  )
}

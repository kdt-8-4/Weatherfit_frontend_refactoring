import { ReactNode } from 'react'
import TextStore, { TextStyle } from '../Atoms/Text/TextStore'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import LoginLogo from '../Molecules/logo/MainLogo'
import MainLogo from '../Molecules/logo/MainLogo'

export default function WebView({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center h-[100vh]">
      <aside className="w-[400px] bg-white ">
        <MainLogo />
      </aside>
      <div className="relative w-[400px] border-2">{children}</div>
    </div>
  )
}

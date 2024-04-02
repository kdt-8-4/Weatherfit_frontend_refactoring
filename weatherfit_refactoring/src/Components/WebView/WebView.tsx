import { ReactNode } from 'react'
import MainLogo from '../Molecules/logo/MainLogo'
import FeedSearch from '../Molecules/post/FeedSearch'

export default function WebView({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center h-[100vh]">
      <aside className="hidden w-[400px] mr-[5%] min-[800px]:block">
        <div className="flex flex-col justify-center items-center h-[100%]">
          <MainLogo />
          <FeedSearch />
        </div>
      </aside>
      <div className="flex flex-col w-[400px] border-2 pb-[66px] relative">
        {children}
      </div>
    </div>
  )
}

import { ReactNode } from 'react'
import TextStore, { TextStyle } from '../Atoms/Text/TextStore'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'

export default function WebView({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
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
        <div className="w-[400px] min-h-[844px] border-2 relative">
          {children}
        </div>
      </div>
    </div>
  )
}

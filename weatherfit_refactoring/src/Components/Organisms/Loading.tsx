import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import TextStore, { TextStyle } from '../Atoms/Text/TextStore'

export default function Loading() {
  return (
    <div className="flex flex-col items-center fixed top-[35%] w-[100%]">
      <BoxStore
        boxStyle={BoxStyle.BOX_BLUE}
        style="h-[33px] font-neurimboGothic text-[30px] mb-[35px] px-[0.6rem] pb-[11px] shadow-[7px_7px_1px] flex items-center">
        옷늘날씨
      </BoxStore>
      <TextStore textStyle={TextStyle.NANUM_TEXT} style="ml-[13px] text-[20px]">
        Loading...
      </TextStore>
    </div>
  )
}

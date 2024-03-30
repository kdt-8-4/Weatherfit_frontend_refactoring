import Link from 'next/link'
import TextStore, { TextStyle } from '../../Atoms/Text/TextStore'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import BoxStore, { BoxStyle } from '../../Atoms/Box/BoxStore'

export default function NoLogin() {
  return (
    <div className="flex flex-col items-center fixed top-[35%] w-[100%]">
      <BoxStore
        boxStyle={BoxStyle.BOX_BLUE}
        style="h-[33px] font-neurimboGothic text-[30px] mb-[35px] px-[0.6rem] pb-[11px] shadow-[7px_7px_1px] flex items-center">
        옷늘날씨
      </BoxStore>
      <TextStore
        textStyle={TextStyle.GMARKET_TEXT}
        style="text-[20px] mb-[30px]">
        로그인 후에 이용할 수 있습니다.
      </TextStore>
      <Link href={'/login'}>
        <ButtonStore
          buttonStyle={ButtonStyle.DEFAULT_BTN}
          style="font-NanumSquareRound w-[170px] mb-[20px] px-[10px] hover:bg-yellow-200">
          로그인 페이지로 이동
        </ButtonStore>
      </Link>
      <Link href={'/'}>
        <ButtonStore
          buttonStyle={ButtonStyle.DEFAULT_BTN}
          style="font-NanumSquareRound w-[170px] px-[10px] hover:bg-yellow-200">
          메인 페이지로 이동
        </ButtonStore>
      </Link>
    </div>
  )
}

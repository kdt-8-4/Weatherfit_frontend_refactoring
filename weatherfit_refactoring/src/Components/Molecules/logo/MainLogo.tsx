'use client'
import BoxStore, { BoxStyle } from '@/Components/Atoms/Box/BoxStore'
import TextStore, { TextStyle } from '@/Components/Atoms/Text/TextStore'
import { useRouter } from 'next/navigation'

export default function MainLogo() {
  const router = useRouter()

  const onClickToMain = () => {
    router.push('/')
  }
  return (
    <section className="mb-[40px] cursor-pointer">
      <TextStore
        textStyle={TextStyle.NANUM_TEXT}
        style="text-center font-semibold mb-[5px]"
        tabIndex={0}>
        기온별 옷차림은,
      </TextStore>
      <BoxStore
        boxStyle={BoxStyle.BOX_BLUE}
        style="font-neurimboGothic text-[28px] w-[160px] h-[45px] rounded-[2rem] pl-[30px] pb-[50px] shadow-[7px_7px_1px]"
        onClickFunction={onClickToMain}
        tabIndex={0}>
        옷늘날씨
      </BoxStore>
    </section>
  )
}

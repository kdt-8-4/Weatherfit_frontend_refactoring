import ButtonStore from '@/Components/Atoms/Button/ButtonStore'
import { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import { useRouter } from 'next/navigation'

export default function LoginLogo() {
  const router = useRouter()

  const onClickToMain = () => {
    router.push('/')
  }
  return (
    <div className="font-semibold mb-[40px]">
      <p
        className="text-center font-NanumSquareRound mb-[5px]
">
        기온별 옷차림은,
      </p>
      <ButtonStore
        onClickFunction={onClickToMain}
        buttonStyle={ButtonStyle.DEFAULT_BTN_BLUE}
        style="font-neurimboGothic text-[28px] w-[160px] h-[45px] rounded-[2rem] pb-[50px]">
        옷늘날씨
      </ButtonStore>
    </div>
  )
}

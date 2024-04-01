'use client'

import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import { useRouter } from 'next/navigation'
import EasyLogin from '@/Components/Organisms/login/EasyLogin'
import LoginForm from '@/Components/Molecules/user/LoginForm'
import NavBar from '@/Components/Molecules/bar/NavBar'
import TextStore, { TextStyle } from '@/Components/Atoms/Text/TextStore'
import MainLogo from '@/Components/Molecules/logo/MainLogo'

export default function Login() {
  const router = useRouter()

  const ClickToRegister = () => {
    router.push('/register')
  }

  return (
    <>
      <div className="flex flex-col items-center mt-[75px]">
        <MainLogo />
        <LoginForm />
        <TextStore textStyle={TextStyle.NANUM_TEXT} style="text-[gray]">
          아직 회원이 아니신가요?
        </TextStore>
        <ButtonStore
          buttonStyle={ButtonStyle.TEXT_BTN}
          onClickFunction={ClickToRegister}
          style="font-NanumSquareRound text-[#93c5fd]">
          회원가입
        </ButtonStore>
        <EasyLogin />
      </div>
      <NavBar />
    </>
  )
}

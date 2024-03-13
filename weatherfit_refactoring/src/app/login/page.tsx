'use client'

import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import EasyLogin from '@/Components/Molecules/EasyLogin'
import LoginForm from '@/Components/Molecules/LoginForm'
import LoginLogo from '@/Components/Molecules/LoginLogo'
import NavBar from '@/Components/Molecules/NavBar'

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center mt-[75px]">
        <LoginLogo />
        <LoginForm />
        <ButtonStore
          buttonStyle={ButtonStyle.TEXT_BTN}
          style="font-NanumSquareRound text-[gray]">
          회원가입
        </ButtonStore>
        <EasyLogin />
      </div>
      <NavBar />
    </>
  )
}

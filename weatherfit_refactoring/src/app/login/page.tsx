'use client'

import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import EasyLogin from '@/Components/Molecules/EasyLogin'
import LoginForm from '@/Components/Molecules/LoginForm'
import LoginLogo from '@/Components/Molecules/LoginLogo'

export default function Login() {
  return (
    <div className="flex flex-col items-center mt-[75px]">
      <LoginLogo />
      <LoginForm />
      <ButtonStore
        buttonStyle={ButtonStyle.TEXT_BTN}
        style="font-NanumSquareRound text-[gray]"
        btnText="회원가입"
      />
      <EasyLogin />
    </div>
  )
}

'use client'

import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import { useRouter } from 'next/navigation'
import EasyLogin from '@/Components/Molecules/EasyLogin'
import LoginForm from '@/Components/Molecules/LoginForm'
import LoginLogo from '@/Components/Molecules/LoginLogo'
import NavBar from '@/Components/Molecules/NavBar'

export default function Login() {
  const router = useRouter()
  
  const ClickToRegister = () => {
    router.push('/register')
  }
  
  return (
    <>
      <div className="flex flex-col items-center mt-[75px]">
        <LoginLogo />
        <LoginForm />
        <ButtonStore
          buttonStyle={ButtonStyle.TEXT_BTN}
          onClickFunction={ClickToRegister}
          style="font-NanumSquareRound text-[gray]">
          회원가입
        </ButtonStore>
        <EasyLogin />
      </div>
      <NavBar />
    </>
  )
}

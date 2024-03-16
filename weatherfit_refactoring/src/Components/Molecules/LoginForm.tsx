'use client'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '@/Components/Atoms/Input/InputStore'
import { confirmAlert } from '@/utils/function/utilFunction'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { AuthUserStore } from '@/Store/AuthUser'

export default function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { setUserEmail } = AuthUserStore()
  const router = useRouter()

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    if (email.trim() === '') {
      confirmAlert('이메일을 입력해 주세요.')
      return
    } else if (password.trim() === '') {
      confirmAlert('비밀번호를 입력해 주세요.')
      return
    }

    try {
      const res = await fetch(`https://www.jerneithe.site/user/login/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const loginRes = await res.json()
      console.log('로그인 loginRes: ', loginRes)

      document.cookie = `accessToken=${loginRes.token}; path=/`
      setUserEmail(loginRes.email)

      confirmAlert(`${loginRes.nickname}님 환영합니다!`)

      router.push('/')
    } catch (error) {
      console.log('로그인 에러: ', error)
      setEmail('')
      setPassword('')
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <form
      className="flex flex-col justify-evenly w-[85vw] h-[30vh]"
      onSubmit={handleLogin}>
      <InputStore
        value={email}
        onChageFunction={handleEmailChange}
        inputStyle={InputStyle.INPUT_WHITE}
        inputType="text"
        placeholderContents="이메일"
        style="font-NanumSquareRound h-[38px] border-[#abacad]"
      />
      <InputStore
        value={password}
        onChageFunction={handlePwChange}
        inputStyle={InputStyle.INPUT_WHITE}
        inputType="password"
        placeholderContents="비밀번호"
        style="font-NanumSquareRound h-[38px] border-[#abacad]"
      />
      <ButtonStore
        buttonStyle={ButtonStyle.CONFIRM_BTN}
        style="font-neurimboGothic text-[22px] pb-[6px]"
        btnType="submit">
        로그인
      </ButtonStore>
    </form>
  )
}

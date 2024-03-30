'use client'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '@/Components/Atoms/Input/InputStore'
import { confirmAlert } from '@/utils/function/utilFunction'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { AuthUserStore } from '@/Store/AuthUser'
import { AuthUserNickStore } from '@/Store/AuthUserNick'
import { useFetchMutation } from '@/utils/useFetch/useFetchMutation'

interface LoginResponse {
  token: string
  email: string
  nickname: string
}

export default function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { setUserEmail } = AuthUserStore()
  const { setUserNick } = AuthUserNickStore()
  const router = useRouter()

  const loginUrl = 'https://www.jerneithe.site/user/login/api'
  const loginOptions = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  }
  const { mutate: login } = useFetchMutation<LoginResponse>(loginUrl)

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    if (email.trim() === '') {
      confirmAlert('이메일을 입력해 주세요.')
      return
    } else if (password.trim() === '') {
      confirmAlert('비밀번호를 입력해 주세요.')
      return
    }

    login(loginOptions, {
      onSuccess: loginRes => {
        console.log('로그인 loginRes: ', loginRes)

        document.cookie = `accessToken=${loginRes.token}; path=/`
        setUserEmail(loginRes.email)

        const loginTime = new Date().getTime()
        localStorage.setItem('login_Time', `${loginTime}`)

        setUserNick(loginRes.nickname)
        confirmAlert(`${loginRes.nickname}님 환영합니다!`)

        router.push('/')
      },
      onError: error => {
        console.error('로그인 실패', error)
        alert('다시 시도해주세요.')

        setEmail('')
        setPassword('')
      },
    })
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

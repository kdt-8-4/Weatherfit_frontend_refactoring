'use client'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '@/Components/Atoms/Input/InputStore'
import { confirmAlert } from '@/utils/function/utilFunction'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [token, setToken] = useState<string>('')
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
      // const res = await fetch(`https://www.jerneithe.site/user/login/api`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // })
      // const loginRes = await res.json()
      // console.log('로그인 res: ', res)
      // console.log('로그인 loginRes: ', loginRes)

      // alert(`${loginRes.nickname}님 환영합니다!`)

      console.log('로그인 클릭')
      console.log('email: ', email)
      console.log('pw: ', password)

      // 백엔드 연결 후 할 것
      // 토큰을 쿠키에 저장
      // document.cookie = `accessToken=${loginRes.token}; path=/`;

      // 이메일을 로컬스토리지에 저장
      // localStorage.setItem("user_email", loginRes.email);

      // 이거 필요한가요?
      // setToken(loginRes.token)

      //router.push("/")
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

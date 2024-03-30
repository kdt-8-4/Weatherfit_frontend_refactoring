'use client'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { confirmAlert } from '@/utils/function/utilFunction'
import RegisterEmailVerify from '../Molecules/RegisterEmailVerify'
import RegisterNickname from '../Molecules/RegisterNickname'
import Registerpw from '../Molecules/Registerpw'
import { useFetchMutation } from '@/utils/useFetch/useFetchMutation'

export default function RegisterForm() {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [verifyHandler, setVerifyHandler] = useState<boolean>(false)
  const [verifyCode, setVerifyCode] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkpw, setCheckpw] = useState<string>('')
  const [permisson, setPermisson] = useState<boolean>(false)

  const setInfo = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (value == 'email') {
      setEmail(e.target.value)
    } else if (value == 'name') {
      setName(e.target.value)
    } else if (value == 'nickname') {
      setNickname(e.target.value)
    } else if (value == 'password') {
      setPassword(e.target.value)
    } else if (value == 'checkpw') {
      setCheckpw(e.target.value)
    } else if (value == 'verifyCode') {
      setVerifyCode(e.target.value)
    }
  }

  // 회원가입
  const handleRegister = async () => {
    const registerInfo = {
      email: email,
      name: name,
      nickname: nickname,
      password: password,
    }
    const registerUrl = 'https://www.jerneithe.site/user/signup'
    const registerOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerInfo),
    }

    if (permisson) {
      const { mutate: register } = useFetchMutation(registerUrl)
      register(registerOptions, {
        onSuccess: () => {
          confirmAlert('옷늘 캐스터 등록되었습니다.')
          router.push('/')
        },
        onError: error => {
          console.log(error)
          confirmAlert('입력하지 않은 정보가 있습니다.')
        },
      })
    } else {
      confirmAlert('이메일 인증을 완료해주세요.')
    }
  }

  return (
    <main className=" mt-[30px] h-[600px] w-[350px]">
      <RegisterEmailVerify
        email={email}
        verifyCode={verifyCode}
        verifyHandler={verifyHandler}
        setVerifyHandler={setVerifyHandler}
        setPermisson={setPermisson}
        setInfo={setInfo}
      />
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        value={name}
        inputType="text"
        placeholderContents="이름"
        onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInfo(e, 'name')
        }
        style="font-NanumSquareRound w-[335px]  p-2 mt-[50px]"
      />

      <RegisterNickname nickname={nickname} setInfo={setInfo} />

      <Registerpw password={password} checkpw={checkpw} setInfo={setInfo} />

      <ButtonStore
        buttonStyle={ButtonStyle.CONFIRM_BTN}
        btnType="submit"
        style="font-neurimboGothic w-[335px] px-1 pb-1 text-[25px] mt-[40px]"
        onClickFunction={handleRegister}>
        옷늘 캐스터 등록
      </ButtonStore>
    </main>
  )
}

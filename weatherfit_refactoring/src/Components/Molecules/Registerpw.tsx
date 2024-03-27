import { useState } from 'react'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'
import { strongPassword } from '@/utils/function/utilFunction'

interface Props {
  password: string
  checkpw: string
  setInfo: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export default function Registerpw({ password, checkpw, setInfo }: Props) {
  const [textColor, setTextColor] = useState<string>('')
  const [emailCheck, setEmailCHeck] = useState<string>('')
  const [effectivenessCheck, setEffectivenessCheck] = useState<string>('')

  const effectiveness = () => {
    const judge = strongPassword(password) // 비밀번호 유효성 검사
    if (!judge) {
      setEffectivenessCheck('※형식에 맞는 비밀번호를 작성해 주세요.')
    } else {
      setEffectivenessCheck('')
    }
  }

  //비밀번호 확인
  const checkTwicepw = () => {
    if (password == checkpw) {
      setEmailCHeck('※비밀번호가 일치합니다.')
      setTextColor('text-green-600')
    } else {
      setEmailCHeck('※비밀번호가 일치하지 않습니다.')
      setTextColor('text-red-600')
    }
  }

  return (
    <div>
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        value={password}
        inputType="password"
        placeholderContents="비밀번호 (8~20자 영문, 숫자, 특수기호 조합)"
        onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInfo(e, 'password')
        }
        onBlur={effectiveness}
        style="font-NanumSquareRound w-[335px]  p-2 mt-[45px]"
      />
      <p className={`font-NanumSquareRound text-red-600 text-[14px]`}>
        {effectivenessCheck}
      </p>
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        value={checkpw}
        inputType="password"
        placeholderContents="비밀번호 확인"
        onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInfo(e, 'checkpw')
        }
        onBlur={checkTwicepw}
        style="font-NanumSquareRound w-[335px]  p-2 mt-[10px]"
      />
      <p className={`font-NanumSquareRound ${textColor} text-[14px]`}>
        {emailCheck}
      </p>
    </div>
  )
}

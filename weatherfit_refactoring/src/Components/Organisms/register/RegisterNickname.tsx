import { Dispatch, SetStateAction, useState } from 'react'
import InputStore, { InputStyle } from '../../Atoms/Input/InputStore'

interface Props {
  nickname: string
  setInfo: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export default function RegisterNickname({ nickname, setInfo }: Props) {
  const [textColor, setTextColor] = useState<string>('')
  const [nicknameDu, setNicknameDu] = useState<string>('')

  // 닉네임 중복 검사
  const nickNameDuCheck = async () => {
    const obj = {
      nickname: nickname,
    }

    try {
      const nickName_verify = await fetch(
        'https://www.jerneithe.site/user/signup/nickname',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        },
      )

      if (nickName_verify.ok) {
        const toJson = await nickName_verify.json()
        console.log(toJson)
        if (toJson.result) {
          setNicknameDu('※사용할 가능한 닉네임입니다.')
          setTextColor('text-green-600')
        } else {
          setNicknameDu('※사용할 수 없는 닉네임입니다. 다시 입력해 주세요')
          setTextColor('text-red-600')
        }
      } else {
        console.error('에러 발생', nickName_verify.status)
      }
    } catch (error) {
      console.error('에러 발생', error)
    }
  }

  return (
    <>
      <InputStore
        inputStyle={InputStyle.INPUT_WHITE}
        value={nickname}
        inputType="text"
        placeholderContents="닉네임"
        onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInfo(e, 'nickname')
        }
        onBlur={nickNameDuCheck}
        style="font-NanumSquareRound w-[335px]  p-2 mt-[20px]"
      />
      <p className={`font-NanumSquareRound ${textColor} text-[14px]`}>
        {nicknameDu}
      </p>
    </>
  )
}

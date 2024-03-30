import { FormEvent, useEffect, useState } from 'react'
import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '../../Atoms/Input/InputStore'
import { confirmAlert, strongPassword } from '@/utils/function/utilFunction'
import bcrypt from 'bcryptjs'
import { AuthUserStore } from '@/Store/AuthUser'
import { AuthTokenStore } from '@/Store/AuthToken'

export default function ProfilePwEdit() {
  const [currentPw, setCurrentPw] = useState<string>('')
  const [newPw, setNewPw] = useState<string>('')
  const [confirmPw, setConfirmPw] = useState<string>('')
  const [pw, setPw] = useState<string>('1234')
  const { userEmail } = AuthUserStore()
  const { accesstoken, setAccessToken } = AuthTokenStore()

  useEffect(() => {
    setAccessToken()
  }, [accesstoken])

  const handlePwEditSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!currentPw) {
      confirmAlert('현재 비밀번호를 입력해주세요.')
      return
    }

    // const isPwMatch = await bcrypt.compare(currentPw, pw)
    if (currentPw !== pw) {
      confirmAlert('현재 비밀번호가 틀립니다.')
      return
    }

    if (newPw === '') {
      confirmAlert('새로운 비밀번호를 입력해주세요.')
      return
    }

    if (!strongPassword(newPw)) {
      confirmAlert('형식에 맞는 비밀번호를 작성해 주세요.')
      return
    }

    if (!confirmPw || newPw !== confirmPw) {
      confirmAlert('비밀번호 재확인을 다시 입력하세요.')
      return
    }

    try {
      if (confirm('비밀번호를 수정하시겠습니까?')) {
        const res = await fetch(
          `https://www.jerneithe.site/user/api/profile/modify`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer' + accesstoken,
            },
            body: JSON.stringify({
              email: userEmail,
              password: newPw,
            }),
          },
        )
        const pwRes = await res.json()

        console.log('비밀번호 수정 결과: ', pwRes)
      }
    } catch (err) {
      console.log('비밀번호 수정 오류: ', err)
    }
  }
  return (
    <form className="flex flex-col" onSubmit={handlePwEditSubmit}>
      <div>
        <p className="font-gmarketsans text-[11px] mb-[10px]">
          비밀번호 (8~20자 영문, 숫자, 특수기호 조합)
        </p>
        <div className="flex flex-col items-center mb-[5px]">
          <InputStore
            inputStyle={InputStyle.INPUT_WHITE}
            inputType="password"
            placeholderContents="현재 비밀번호"
            style="w-[50vw] h-[4vh] text-[12px] mb-[5px]"
            value={currentPw}
            onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCurrentPw(e.target.value)
            }
          />
          <InputStore
            inputStyle={InputStyle.INPUT_WHITE}
            inputType="password"
            placeholderContents="변경 비밀번호"
            style="w-[50vw] h-[4vh] text-[12px] mb-[5px]"
            value={newPw}
            onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewPw(e.target.value)
            }
          />
          <InputStore
            inputStyle={InputStyle.INPUT_WHITE}
            inputType="password"
            placeholderContents="변경 비밀번호 재확인"
            style="w-[50vw] h-[4vh] text-[12px] mb-[5px]"
            value={confirmPw}
            onChageFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPw(e.target.value)
            }
          />
        </div>
      </div>
      <ButtonStore
        buttonStyle={ButtonStyle.CATEGORY_BTN_Y}
        style="font-neurimboGothic pb-[5px]">
        비밀번호 수정
      </ButtonStore>
    </form>
  )
}

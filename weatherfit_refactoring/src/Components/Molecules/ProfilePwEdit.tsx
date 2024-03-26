import { FormEvent, useState } from 'react'
import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'
import { confirmAlert } from '@/utils/function/utilFunction'

export default function ProfilePwEdit() {
  const [currentPw, setCurrentPw] = useState<string>('')
  const [newPw, setNewPw] = useState<string>('')
  const [confirmPw, setConfirmPw] = useState<string>('')

  const handlePwEditSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // if(!currentPw) {
    //     confirmAlert('현재 비밀번호를 입력해주세요.')
    //     return
    // }

    // const isPwMatch = await bcrypt.compare(currentPw, pw)
    // if(!isPwMatch) {
    //     confirmAlert("현재 비밀번호가 틀립니다.")
    //     return
    // }

    // if(newPw === "") {
    //     confirmAlert("새로운 비밀번호를 입력해주세요.")
    //     return
    // }
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
        style="font-neurimboGothic">
        비밀번호 수정
      </ButtonStore>
    </form>
  )
}

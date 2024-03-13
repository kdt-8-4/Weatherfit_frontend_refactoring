'use client'

import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import BoxStore, { BoxStyle } from '../Atoms/Box/BoxStore'
import InputStore, { InputStyle } from '../Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import ProfileModalInfo from '../Molecules/ProfileModalInfo'
import Logout from '../Molecules/Logout'
import Unregister from '../Molecules/Unregister'
import ProfileImageEdit from '../Molecules/ProfileImageEdit'

interface Props {
  onClickFunction?: () => void
}

export default function ProfileEditModal({ onClickFunction }: Props) {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000066] z-[100] flex justify-center items-center">
      <div className="bg-[#ffffff] w-[70vw] h-[75vh] rounded-md z-[200]">
        {/* 헤더 부분 */}
        <div className="flex justify-center items-center relative my-[10px]">
          <IconStore
            iconStyle={IconStyle.PREV2}
            size={20}
            style="ml-[10px] cursor-pointer absolute left-0"
            onClickFunction={onClickFunction}
          />
          <BoxStore
            boxStyle={BoxStyle.BOX_BLUE}
            style="px-2 h-[21px] font-neurimboGothic text-[17px] pb-[5px] shadow-[7px_7px_1px] flex items-center">
            프로필 편집
          </BoxStore>
        </div>
        <div className="p-[20px]">
          <ProfileImageEdit />
          <hr className="my-[10px]" />
          {/* 이메일, 이름, 닉네임 부분 */}
          <div className="flex flex-col items-center">
            <ProfileModalInfo title="이메일" value="user@test.com" />
            <ProfileModalInfo title="이름" value="가나다" />
            <ProfileModalInfo title="닉네임" value="깜찍이" />
          </div>
          <hr className="my-[10px]" />
          {/* 비밀번호 부분 */}
          <form className="flex flex-col ">
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
                />
                <InputStore
                  inputStyle={InputStyle.INPUT_WHITE}
                  inputType="password"
                  placeholderContents="변경 비밀번호"
                  style="w-[50vw] h-[4vh] text-[12px] mb-[5px]"
                />
                <InputStore
                  inputStyle={InputStyle.INPUT_WHITE}
                  inputType="password"
                  placeholderContents="변경 비밀번호 재확인"
                  style="w-[50vw] h-[4vh] text-[12px] mb-[5px]"
                />
              </div>
            </div>
            <ButtonStore
              buttonStyle={ButtonStyle.CATEGORY_BTN_Y}
              style="font-neurimboGothic">
              비밀번호 수정
            </ButtonStore>
          </form>
          <hr className="my-[10px]" />
          <div className="flex items-center justify-center flex-col">
            <Logout />
            <Unregister />
          </div>
        </div>
      </div>
    </div>
  )
}

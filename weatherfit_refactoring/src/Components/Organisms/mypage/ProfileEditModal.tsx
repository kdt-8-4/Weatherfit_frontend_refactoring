'use client'

import IconStore, { IconStyle } from '../../Atoms/Icon/IconStore'
import BoxStore, { BoxStyle } from '../../Atoms/Box/BoxStore'
import InputStore, { InputStyle } from '../../Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import ProfileModalInfo from '../../Molecules/user/ProfileModalInfo'
import Logout from '../../Molecules/user/Logout'
import Unregister from '../../Molecules/user/Unregister'
import ProfileImageEdit from './ProfileImageEdit'
import ProfilePwEdit from './ProfilePwEdit'

interface Props {
  onClickFunction?: () => void
  userInfo: UserData
}

export default function ProfileEditModal({ onClickFunction, userInfo }: Props) {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000066] z-[100] flex justify-center items-center">
      <div className="bg-[#ffffff] w-[340px] h-[600px] rounded-md z-[200]">
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
          {/* 이미지 부분 */}
          <ProfileImageEdit image={userInfo.image} />
          <hr className="my-[10px]" />
          {/* 이메일, 이름, 닉네임 부분 */}
          <div className="flex flex-col items-center">
            <ProfileModalInfo title="이메일" value={userInfo.email} />
            <ProfileModalInfo title="이름" value={userInfo.name} />
            <ProfileModalInfo title="닉네임" value={userInfo.nickname} />
          </div>
          <hr className="my-[10px]" />
          {/* 비밀번호 부분 */}
          <ProfilePwEdit pw={userInfo.password} />
          <hr className="my-[10px]" />
          <div className="flex items-center justify-evenly flex-col h-[92px]">
            <Logout />
            <Unregister />
          </div>
        </div>
      </div>
    </div>
  )
}

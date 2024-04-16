'use client'

import IconStore, { IconStyle } from '@/Components/Atoms/Icon/IconStore'
import Image from 'next/image'

export default function DetailProfile({ userData }: { userData: UserData }) {
  return (
    <div className="flex items-center font-NanumSquareRound mt-5">
      <Image
        src={
          'https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90'
        }
        width={50}
        height={50}
        alt="profile"
        className="rounded-full"
      />
      <div className="flex-col ml-3 pb-1">
        <p className="text-lg">홍길동</p>
        <p className="text-xs text-gray-400">@user1</p>
      </div>
      {/* 백엔드 해결되면 위에 코드 지우고 아래 살리면 됨 */}
      {/* {userData.image == null ? (
        <IconStore
          iconStyle={IconStyle.MY_PROFILE_FILL}
          size={50}
          style="border-[3px] border-solid border-gray rounded-full"
        />
      ) : (
        <Image
          src={userData.image}
          alt="profile"
          width={50}
          height={50}
          className="rounded-full"
        />
      )}
      <div className="flex-col ml-3 pb-1">
        <p className="text-lg">{userData.nickname}</p>
        <p className="text-xs text-gray-400">@{userData.email.split('@')[0]}</p>
      </div> */}
    </div>
  )
}

'use client'

import Image from 'next/image'

export default function DetailProfile({
  nickName,
  userData,
}: {
  nickName: string
  userData: FEEDDATA_detail
}) {
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
      {/* <Image
        src={userData.userImage}
        width={50}
        height={50}
        alt="profile"
        className="rounded-full"
      /> */}
      <div className="flex-col ml-3 pb-1">
        <p className="text-lg">{nickName}</p>
        <p className="text-xs text-gray-400">@user1</p>
        {/* <p className="text-xs text-gray-400">여기 아이디 들어가면 되려나</p> */}
      </div>
    </div>
  )
}

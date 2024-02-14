'use client'

import Image from 'next/image'

export default function DetailProfile({
  data,
  userData,
}: {
  data: FEEDDATA_detail
  userData: FEEDDATA_detail
}) {
  return (
    <div className="flex items-center font-NanumSquareRound mt-5">
      <Image
        src={userData.userImage}
        width={50}
        height={50}
        alt="profile"
        className="rounded-full"
      />
      <div className="flex-col ml-3 pb-1">
        <p className="text-lg">{data.nickName}</p>
        <p className="text-xs text-gray-400">@user_one</p>
        {/* <p className="text-xs text-gray-400">여기 아이디 들어가면 되려나</p> */}
      </div>
    </div>
  )
}

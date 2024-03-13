'use client'

import React, { useEffect, useState } from 'react'
import ProfileInfo from '@/Components/Molecules/ProfileInfo'
import ProfileHeader from '@/Components/Organisms/ProfileHeader'
import ProfileBoard from '@/Components/Organisms/ProfileBoard'
import AuthUserEmailStore from '@/Store/AuthUserEmail'

export default function Mypage() {
  // 회원 정보
  const [userPofile, setUserProfile] = useState<any>(null)
  const [userImage, setUserImage] = useState<string | null>('') // 프로필 이미지
  const [refreshProfile, setRefreshProfile] = useState<boolean>(false) // 회원 정보 변경했을 때
  const [myPostData, setMyPostData] = useState<FEEDDATA[]>([])
  const [myLikePostData, setMyLikePostData] = useState<FEEDDATA[]>([])
  const { userEmail, setUserEmail } = AuthUserEmailStore()

  console.log('user email: ', userEmail)
  // 회원 정보 불러오기
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // 프로필 데이터 가져오기
  //       const res = await fetch(`https://www.jerneithe.site/user/api/profile`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: 'Bearer',
  //         },
  //         body: JSON.stringify({
  //           email: localStorage.getItem('user_email'),
  //         }),
  //       })

  //       const profileRes = await res.json()

  //       setUserProfile(profileRes)
  //       setUserImage(profileRes.image)

  //       console.log('유저 data: ', profileRes)

  //       // -----------------------------------------

  //       // 게시물 데이터 가져오기
  //       const boardListRes = await fetch(
  //         'https://www.jerneithe.site/board/list',
  //       )
  //       const boardListdata: FEEDDATA[] = await boardListRes.json()

  //       const filteredData = boardListdata.filter(
  //         item => item.nickName === userPofile.nickname,
  //       )
  //       setMyPostData(filteredData)

  //       const filteredLikeData = boardListdata.filter(item =>
  //         item.likelist.some(like => like.nickName === userPofile.nickname),
  //       )
  //       setMyLikePostData(filteredLikeData)
  //     } catch (error) {
  //       console.error('데이터 로딩 에러: ', error)
  //     }
  //   }
  //   fetchData()
  // }, [refreshProfile])

  return (
    <>
      <ProfileHeader />
      <ProfileInfo
        profileImage={userImage}
        userInfo={userPofile}
        myPost={myPostData}
        myLikePost={myLikePostData}
      />
      <ProfileBoard myPost={myPostData} myLikePost={myLikePostData} />
    </>
  )
}

'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProfileInfo from '@/Components/Molecules/ProfileInfo'
import ProfileHeader from '@/Components/Organisms/ProfileHeader'
import ProfileBoard from '@/Components/Organisms/ProfileBoard'

export default function Mypage() {
  // 회원 정보
  const [userPofile, setUserProfile] = useState<any>(null)
  const [userImage, setUserImage] = useState<string | null>('') // 프로필 이미지
  const [refreshProfile, setRefreshProfile] = useState<boolean>(false) // 회원 정보 변경했을 때
  const [myPostData, setMyPostData] = useState<FEEDDATA[]>([])
  const [myLikePostData, setMyLikePostData] = useState<FEEDDATA[]>([])

  // 회원 정보 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 프로필 데이터 가져오기
        const response = await axios({
          method: 'POST',
          url: `https://www.jerneithe.site/user/api/profile`,
          headers: {
            Authorization: 'Bearer ',
          },
          data: {
            email: localStorage.getItem('user_email'),
          },
        })

        setUserProfile(response.data)
        setUserImage(response.data.image)

        console.log('유저 data: ', response.data)

        // -----------------------------------------

        // 게시물 데이터 가져오기
        const req = await axios.get('https://www.jerneithe.site/board/list')
        const data: FEEDDATA[] = req.data

        const filteredData = data.filter(
          item => item.nickName === userPofile.nickname,
        )
        setMyPostData(filteredData)

        const filteredLikeData = data.filter(item =>
          item.likelist.some(like => like.nickName === userPofile.nickname),
        )
        setMyLikePostData(filteredLikeData)
      } catch (error) {
        console.error('데이터 로딩 에러: ', error)
      }
    }
    fetchData()
  }, [refreshProfile])

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

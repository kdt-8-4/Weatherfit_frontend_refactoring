'use client'

import React, { useEffect, useState } from 'react'
import ProfileInfo from '@/Components/Molecules/ProfileInfo'
import ProfileHeader from '@/Components/Organisms/ProfileHeader'
import ProfileBoard from '@/Components/Organisms/ProfileBoard'
import { AuthTokenStore } from '@/Store/AuthToken'
import { LoadingStore } from '@/Store/Loading'
import { CheckStore } from '@/Store/Check'
import { loginCheck } from '@/utils/function/utilFunction'
import Loading from '@/Components/Organisms/Loading'
import NoLogin from '@/Components/Organisms/NoLogin'
import { AuthUserStore } from '@/Store/AuthUser'

export default function Mypage() {
  // 사용법 참고
  const { loading, setLoading } = LoadingStore()
  const { accesstoken, setAccessToken } = AuthTokenStore()
  const { check, setCheck } = CheckStore()
  const { userEmail } = AuthUserStore()

  useEffect(() => {
    setAccessToken()
    loginCheck(accesstoken, setCheck, setLoading)
  }, [accesstoken])

  // 회원 정보
  const [userInfo, setUserInfo] = useState<UserData>()
  const [profileImage, setProfileImage] = useState<string | null>('') // 프로필 이미지
  const [refreshProfile, setRefreshProfile] = useState<boolean>(false) // 회원 정보 변경했을 때
  const [myPostData, setMyPostData] = useState<FEEDDATA[]>([])
  const [myLikePostData, setMyLikePostData] = useState<FEEDDATA[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 프로필 더미 데이터 가져오기
        const res = await fetch('/dummy_data/userprofile.json')
        const profileRes = await res.json()
        console.log('회원정보: ', profileRes.userprofile_data)
        setUserInfo(profileRes.userprofile_data)
        setProfileImage(profileRes.profileimage_data.profileImage)

        const postres = await fetch('dummy_data/post.json')
        const postdata = await postres.json()
        setMyPostData(postdata.mypost_data)
        setMyLikePostData(postdata.mylikepost_data)
      } catch (err) {
        console.log('회원정보 에러: ', err)
      }
    }

    fetchData()
  }, [])

  // 회원 정보 불러오기
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // 프로필 데이터 가져오기
  //       const res = await fetch(`https://www.jerneithe.site/user/api/profile`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: 'Bearer' + accesstoken,
  //         },
  //         body: JSON.stringify({
  //           email: userEmail,
  //         }),
  //       })

  //       const profileRes = await res.json()

  //       // setUserProfile(profileRes)
  //       // setUserImage(profileRes.image)

  //       console.log('회원정보 data: ', profileRes)

  //       // -----------------------------------------

  //       // 게시물 데이터 가져오기
  //       // const boardListRes = await fetch(
  //       //   'https://www.jerneithe.site/board/list',
  //       // )
  //       // const boardListdata: FEEDDATA[] = await boardListRes.json()

  //       // const filteredData = boardListdata.filter(
  //       //   item => item.nickName === userPofile.nickname,
  //       // )
  //       // setMyPostData(filteredData)

  //       // const filteredLikeData = boardListdata.filter(item =>
  //       //   item.likelist.some(like => like.nickName === userPofile.nickname),
  //       // )
  //       // setMyLikePostData(filteredLikeData)
  //     } catch (error) {
  //       console.error('데이터 로딩 에러: ', error)
  //     }
  //   }
  //   fetchData()
  // }, [refreshProfile])

  return (
    <>
      {/* <ProfileHeader />
      {userInfo && (
        <ProfileInfo
          profileImage={profileImage}
          userInfo={userInfo}
          myPost={myPostData}
          myLikePost={myLikePostData}
        />
      )}
      <ProfileBoard myPost={myPostData} myLikePost={myLikePostData} /> */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {check ? (
            <>
              <ProfileHeader />
              <main>
                {userInfo && (
                  <ProfileInfo
                    profileImage={profileImage}
                    userInfo={userInfo}
                    myPost={myPostData}
                    myLikePost={myLikePostData}
                  />
                )}
                <ProfileBoard myPost={myPostData} myLikePost={myLikePostData} />
              </main>
            </>
          ) : (
            <NoLogin />
          )}
        </>
      )}
    </>
  )
}

'use client'

import React, { useEffect, useState } from 'react'
import ProfileInfo from '@/Components/Organisms/mypage/ProfileInfo'
import ProfileHeader from '@/Components/Molecules/header/ProfileHeader'
import ProfileBoard from '@/Components/Organisms/mypage/ProfileBoard'
import NavBar from '@/Components/Molecules/bar/NavBar'
import { AuthTokenStore } from '@/Store/AuthToken'
import { LoadingStore } from '@/Store/Loading'
import { CheckStore } from '@/Store/Check'
import {
  confirmAlert,
  deleteAlert,
  loginCheck,
} from '@/utils/function/utilFunction'
import Loading from '@/Components/Molecules/check/Loading'
import NoLogin from '@/Components/Molecules/check/NoLogin'
import { AuthUserStore } from '@/Store/AuthUser'
import { AuthUserNickStore } from '@/Store/AuthUserNick'

export default function Mypage() {
  // 사용법 참고
  const { loading, setLoading } = LoadingStore()
  const { accesstoken, setAccessToken } = AuthTokenStore()
  const { check, setCheck } = CheckStore()
  const { userEmail } = AuthUserStore()
  const { userNick } = AuthUserNickStore()

  // 회원 정보
  const [userInfo, setUserInfo] = useState<UserData>()
  const [refreshProfile, setRefreshProfile] = useState<boolean>(false) // 회원 정보 변경했을 때
  const [myPostData, setMyPostData] = useState<FEEDDATA[]>([])
  const [myLikePostData, setMyLikePostData] = useState<FEEDDATA[]>([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // 프로필 더미 데이터 가져오기
  //       const profileres = await fetch('/dummy_data/userprofile.json')
  //       const profiledata = await profileres.json()
  //       console.log('회원정보: ', profiledata.userprofile_data)
  //       setUserInfo(profiledata.userprofile_data)
  //       setProfileImage(profiledata.profileimage_data.profileImage)

  // const postres = await fetch('dummy_data/post.json')
  // const postdata = await postres.json()
  // setMyPostData(postdata.mypost_data)
  // setMyLikePostData(postdata.mylikepost_data)
  //     } catch (err) {
  //       console.log('회원정보 에러: ', err)
  //     }
  //   }

  //   fetchData()
  // }, [])

  // 회원 정보 불러오기
  useEffect(() => {
    setAccessToken()
    loginCheck(accesstoken, setCheck, setLoading)
    if (typeof accesstoken === 'string' && accesstoken) {
      const fetchData = async () => {
        try {
          // 프로필 데이터 가져오기
          const profileRes = await fetch(
            `https://www.jerneithe.site/user/api/profile`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + accesstoken,
              },
              body: JSON.stringify({
                email: userEmail,
              }),
            },
          )

          const profileData = await profileRes.json()

          setUserInfo(profileData)

          console.log('회원정보 data: ', profileData)

          // -----------------------------------------

          // 게시물 데이터 가져오기
          const boardListRes = await fetch(
            'https://www.jerneithe.site/board/list',
          )
          const boardListdata: FEEDDATA[] = await boardListRes.json()

          console.log('보드데이터: ', boardListdata)

          const filteredData = boardListdata.filter(
            item => item.nickName === userNick,
          )
          setMyPostData(filteredData)

          const filteredLikeData = boardListdata.filter(item =>
            item.likelist.some(like => like.nickName === userNick),
          )
          setMyLikePostData(filteredLikeData)
        } catch (err) {
          console.log('회원정보 에러', err)
        }
      }
      fetchData()
    }
  }, [accesstoken, refreshProfile])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {check ? (
            <>
              {userInfo && <ProfileHeader userInfo={userInfo} />}
              <main className="flex-1 overflow-y-auto">
                {userInfo && (
                  <ProfileInfo
                    userInfo={userInfo}
                    myPost={myPostData}
                    myLikePost={myLikePostData}
                  />
                )}
                <ProfileBoard myPost={myPostData} myLikePost={myLikePostData} />
              </main>
              <NavBar />
            </>
          ) : (
            <NoLogin />
          )}
        </>
      )}
    </>
  )
}

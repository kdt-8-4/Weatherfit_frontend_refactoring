'use client'

import React, { useEffect, useState } from 'react'
import ProfileInfo from '@/Components/Molecules/ProfileInfo'
import ProfileHeader from '@/Components/Organisms/ProfileHeader'
import ProfileBoard from '@/Components/Organisms/ProfileBoard'
import NavBar from '@/Components/Molecules/NavBar'
import { AuthTokenStore } from '@/Store/AuthToken'
import { LoadingStore } from '@/Store/Loading'
import { CheckStore } from '@/Store/Check'
import { loginCheck } from '@/utils/function/utilFunction'
import Loading from '@/Components/Organisms/Loading'
import NoLogin from '@/Components/Organisms/NoLogin'
import { AuthUserStore } from '@/Store/AuthUser'
import { useFetchMutation } from '@/utils/useFetch/useFetchMutation'
import { useFetchGet } from '@/utils/useFetch/useFetchGet'

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // 프로필 더미 데이터 가져오기
  //       const res = await fetch('/dummy_data/userprofile.json')
  //       const profileRes = await res.json()
  //       console.log('회원정보: ', profileRes.userprofile_data)
  //       setUserInfo(profileRes.userprofile_data)
  //       setProfileImage(profileRes.profileimage_data.profileImage)

  //       const postres = await fetch('dummy_data/post.json')
  //       const postdata = await postres.json()
  //       setMyPostData(postdata.mypost_data)
  //       setMyLikePostData(postdata.mylikepost_data)
  //     } catch (err) {
  //       console.log('회원정보 에러: ', err)
  //     }
  //   }

  //   fetchData()
  // }, [])

  // 회원 정보 불러오기
  const profileUrl = 'https://www.jerneithe.site/user/api/profile'
  const profileOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer' + accesstoken,
    },
    body: JSON.stringify({
      email: userEmail,
    }),
  }
  const {
    mutate: fetchProfile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useFetchMutation(profileUrl)

  // 게시글 정보 불러오기
  const boardQueryKey = 'boardData'
  const boardUrl = 'https://www.jerneithe.site/board/list'
  const boardOptions = { method: 'GET' }

  useEffect(() => {
    fetchProfile(profileOptions, {
      onSuccess: (profileRes: any) => {
        setUserInfo(profileRes)
        setProfileImage(profileRes.image)
        console.log('회원정보 data: ', profileRes)

        // const { data: boardData } = useFetchGet<FEEDDATA>(
        //   boardQueryKey,
        //   boardUrl,
        //   boardOptions,
        // )
        // const filteredData = boardData.filter(
        //   item => item.nickName === userProfile.nickName,
        // )
        // setMyPostData(filteredData)
        // const filteredLikeData = boardData.filter(item =>
        //   item.likelist.some(like => like.nickName === userPofile.nickname),
        // )
        // setMyLikePostData(filteredLikeData)
      },
      onError: error => {
        console.log('회원정보 불러오기 실패', error)
      },
    })
  }, [refreshProfile])

  return (
    <>
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
                <NavBar />
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

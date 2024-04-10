'use client'

import DetailContent from '@/Components/Molecules/post/DetailContent'
import DetailImage from '@/Components/Molecules/post/DetailImage'
import DetailCategory from '../../Molecules/post/DetailCategory'
import LikeAndComment from './LikeAndComment'
import DetailProfile from '../../Molecules/user/DetailProfile'
import DetailEtc from '../../Molecules/post/DetailEtc'
import NotFound from '@/app/not-found'
import { useEffect, useState } from 'react'
import { AuthTokenStore } from '@/Store/AuthToken'

export default function DetailOrganism({ boardId }: { boardId: BOARDID }) {
  const { accesstoken } = AuthTokenStore()
  const [boardData, setBoardData] = useState<FEEDDATA_detail>()
  const [userData, setUserData] = useState<UserData>()
  const [refreshComments, setRefreshComments] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchBoardDataResponse = await fetch(
          `https://www.jerneithe.site/board/detail/${boardId}`,
          {
            method: 'GET',
          },
        )
        const fetchBoardData = await fetchBoardDataResponse.json()
        setBoardData(fetchBoardData)
        console.log('fetchBoardData: ', fetchBoardData)

        // 작성 유저 정보
        // 작성한 유저의 정보를 가져오는 거라서 token 값이 들어가면 안됨
        // 일단 오류 방지를 위해 현재 로그인한 유저의 토큰값을 보내서 정보를 가져올 수 있음
        // 로그인 안해도 게시물 확인할 수 있도록 토큰값 없이 작성자 정보 불러오기
        const fetchUserDataResponse = await fetch(
          `https://www.jerneithe.site/user/api/userinfo`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + accesstoken,
            },
            body: JSON.stringify({
              nickname: fetchBoardData.nickName,
            }),
          },
        )
        const fetchUserData = await fetchUserDataResponse.json()
        setUserData(fetchUserData)
        console.log('fetchUserData: ', fetchUserData)
      } catch (err) {
        console.log('오류: ', err)
      }
    }
    fetchData()
  }, [boardId, refreshComments])

  //  if (!fetchBoardData.boardId) NotFound()
  //  else
  return (
    <div className="space-y-5">
      <div className="mx-5 space-y-3">
        <div className="flex justify-between">
          {userData && (
            <>
              <DetailProfile userData={userData} />
              <DetailEtc boardId={boardId} nickName={userData.nickname} />
            </>
          )}
        </div>
        {boardData && (
          <>
            <DetailImage images={boardData.images} />
            <LikeAndComment
              boardId={boardId}
              likelist={boardData.likelist}
              comments={boardData.comments}
              refreshComments={() => setRefreshComments(!refreshComments)}
            />
            <DetailContent
              nickName={boardData.nickName}
              content={boardData.content}
              hashTag={boardData.hashTag}
            />
          </>
        )}
      </div>
      {boardData && <DetailCategory category={boardData.category} />}
    </div>
  )
}

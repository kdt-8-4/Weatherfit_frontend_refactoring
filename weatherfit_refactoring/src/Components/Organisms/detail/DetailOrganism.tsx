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
        // 게시글 정보
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
        const fetchUserDataResponse = await fetch(
          `https://www.jerneithe.site/user/simpleuserinfo`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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

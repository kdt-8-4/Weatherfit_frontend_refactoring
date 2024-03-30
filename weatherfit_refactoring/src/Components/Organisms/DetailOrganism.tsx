import DetailContent from '@/Components/Molecules/DetailContent'
import DetailImage from '@/Components/Molecules/DetailImage'
import DetailCategory from '../Molecules/DetailCategory'
import LikeAndComment from '../Molecules/LikeAndComment'
import DetailProfile from '../Molecules/DetailProfile'
import DetailEtc from '../Molecules/DetailEtc'
import { useFetchGet } from '@/utils/useFetch/useFetchGet'
import { useFetchMutation } from '@/utils/useFetch/useFetchMutation'
import { useState } from 'react'
import NotFound from '@/app/not-found'
import Loading from './Loading'

export default function DetailOrganism({ boardId }: { boardId: BOARDID }) {
  // 게시물 데이터 받아오기
  const boardDataQueryKey = 'boardData'
  const boardDataUrl = `https://www.jerneithe.site/board/detail/${boardId}`
  const boardDataOption = { method: 'GET' }
  const {
    data: fetchBoardData,
    isLoading: isBoardLoading,
    error: boardError,
  } = useFetchGet(boardDataQueryKey, boardDataUrl, boardDataOption)

  // 사용자 데이터 받아오기
  const [fetchUserData, setFetchUserData] = useState<FEEDDATA_detail | null>(
    null,
  )
  const userDataUrl = 'https://www.jerneithe.site/user/api/userinfo'
  const userDataOption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nickName: fetchBoardData?.nickName,
    }),
  }

  const { mutate: getUserData } = useFetchMutation<FEEDDATA_detail>(userDataUrl)
  getUserData(userDataOption, {
    onSuccess: data => {
      console.log('사용자 데이터:', data)
      setFetchUserData(data)
    },
    onError: error => {
      console.error('사용자 데이터 가져오기 실패:', error)
    },
  })

  if (isBoardLoading) return <Loading />
  if (boardError) return <NotFound />

  return (
    <div className="space-y-5">
      <div className="mx-5 space-y-3">
        <div className="flex justify-between">
          <DetailProfile
            nickName={fetchBoardData.nickName}
            userData={fetchUserData!}
          />
          <DetailEtc boardId={boardId} nickName={fetchBoardData.nickName} />
        </div>
        <DetailImage images={fetchBoardData.images} />
        <LikeAndComment boardId={boardId} likelist={fetchBoardData.likelist} />
        <DetailContent
          nickName={fetchBoardData.nickName}
          content={fetchBoardData.content}
          hashTag={fetchBoardData.hashTag}
        />
      </div>
      <DetailCategory category={fetchBoardData.category} />
    </div>
  )
}

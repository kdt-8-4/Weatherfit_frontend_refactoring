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
  // const fetchBoardDataResponse = await fetch(
  //   `https://www.jerneithe.site/board/detail/${boardId}`,
  //   {
  //     method: 'GET',
  //   },
  // )
  // const fetchBoardData = await fetchBoardDataResponse.json()

  const boardDataQueryKey = 'boardData'
  const boardDataUrl = `https://www.jerneithe.site/board/detail/${boardId}`
  const boardDataOption = { method: 'GET' }
  const {
    data: fetchBoardData,
    isLoading: isBoardLoading,
    error: boardError,
  } = useFetchGet(boardDataQueryKey, boardDataUrl, boardDataOption)

  // const fetchUserDataResponse = await fetch(
  //   `https://www.jerneithe.site/user/api/userinfo`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       nickName: fetchBoardData.nickName,
  //     }),
  //   },
  // )
  // const fetchUserData = await fetchUserDataResponse.json()

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

  const { mutate } = useFetchMutation<FEEDDATA_detail>(userDataUrl)
  mutate(userDataOption, {
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

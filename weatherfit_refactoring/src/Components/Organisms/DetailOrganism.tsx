import DetailContent from '@/Components/Molecules/DetailContent'
import DetailImage from '@/Components/Molecules/DetailImage'
import DetailCategory from '../Molecules/DetailCategory'
import LikeAndComment from '../Molecules/LikeAndComment'
import DetailProfile from '../Molecules/DetailProfile'
import DetailEtc from '../Molecules/DetailEtc'
import NotFound from '@/app/not-found'


export default async function DetailOrganism({
  boardId,
}: {
  boardId: BOARDID
}) {
  const fetchBoardDataResponse = await fetch(
    `https://www.jerneithe.site/board/detail/${boardId}`,
    {
      method: 'GET',
    },
  )
  const fetchBoardData = await fetchBoardDataResponse.json()

  const fetchUserDataResponse = await fetch(
    `https://www.jerneithe.site/user/api/userinfo`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickName: fetchBoardData.nickName,
      }),
    },
  )
  const fetchUserData = await fetchUserDataResponse.json()

  if (!fetchBoardData.boardId) NotFound()
  else
    return (
      <div className="space-y-5">
        <div className="mx-5 space-y-3">
          <div className="flex justify-between">
            <DetailProfile
              nickName={fetchBoardData.nickName}
              userData={fetchUserData}
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

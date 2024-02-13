import DetailContent from '@/Components/Molecules/DetailContent'
import DetailImage from '@/Components/Molecules/DetailImge'
import DetailCategory from '../Molecules/DetailCategory'
import LikeAndComment from '../Molecules/LikeAndComment'
import DetailProfile from '../Molecules/DetailProfile'
import DetailEtc from '../Molecules/DetailEtc'
import NotFound from '@/app/not-found'

export default async function DetailOrganism({ boardId }: BOARDID) {
  const response = await fetch(
    `https://www.jerneithe.site/board/detail/${boardId}`,
    {
      method: 'GET',
    },
  )
  const data: FEEDDATA_detail = await response.json()

  const userResponse = await fetch(
    `https://www.jerneithe.site/user/api/userinfo`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickName: data.nickName,
      }),
    },
  )

  const userData = await userResponse.json()
  console.log('userData: ', userData)

  if (!data.boardId) return NotFound()
  else
    return (
      <div className="space-y-5">
        <div className="mx-5 space-y-3">
          <div className="flex justify-between">
            <DetailProfile data={data} userData={userData} />
            <DetailEtc boardId={boardId} />
          </div>
          <DetailImage data={data} />
          <LikeAndComment />
          <DetailContent data={data} />
        </div>
        <DetailCategory data={data} />
      </div>
    )
}

import DetailContent from '@/Components/Molecules/DetailContent'
import DetailImage from '@/Components/Molecules/DetailImge'
import DetailCategory from '../Molecules/DetailCategory'
import LikeAndComment from '../Molecules/LikeAndComment'
import DetailProfile from '../Molecules/DetailProfile'
import DetailEtc from '../Molecules/DetailEtc'

export default function DetailOrganism({ boardId }: BOARDID) {
  return (
    <div className="space-y-5">
      <div className="mx-5 space-y-3">
        <div className="flex justify-between">
          <DetailProfile boardId={boardId} />
          <DetailEtc boardId={boardId} />
        </div>
        <DetailImage boardId={boardId} />
        <LikeAndComment />
        <DetailContent boardId={boardId} />
      </div>
      <DetailCategory boardId={boardId} />
    </div>
  )
}

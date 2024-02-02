import DetailContent from '@/Components/Molecules/DetailContent'
import DetailImage from '@/Components/Molecules/DetailImge'
import DetailCategory from '../Molecules/DetailCategory'
import LikeAndComment from '../Molecules/LikeAndComment'

export default function DetailOrganism({ boardId }: BOARDID) {
  return (
    <div className="space-y-5">
      <div className="mx-5 space-y-3">
        <DetailImage boardId={boardId} />
        <LikeAndComment />
        <DetailContent boardId={boardId} />
      </div>
      <DetailCategory boardId={boardId} />
    </div>
  )
}

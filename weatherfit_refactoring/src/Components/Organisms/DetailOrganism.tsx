import DetailContent from '@/Components/Molecules/DetailContent'
import DetailImage from '@/Components/Molecules/DetailImge'
import DetailProfile from '@/Components/Molecules/DetailProfile'
import DetailCategory from '../Molecules/DetailCategory'
import feedDummy from '../../../public/dummy_data/feed.json'

export default function DetailOrganism({ boardId }: BOARDID) {
  return (
    <div className="h-screen space-y-5">
      <div className="mx-5 space-y-5">
        <DetailProfile boardId={boardId} />
        <DetailImage boardId={boardId} />
        {/* 좋아요 & 댓글 */}
        <DetailContent boardId={boardId} />
      </div>
      <DetailCategory boardId={boardId} />
    </div>
  )
}

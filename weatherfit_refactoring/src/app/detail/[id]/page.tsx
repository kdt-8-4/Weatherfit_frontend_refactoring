import Header from '@/Components/Molecules/Header'
import WeatherNavbar from '@/Components/Molecules/WeatherNavbar'
import DetailOrganism from '@/Components/Organisms/DetailOrganism'
import DetailProfileOrganism from '@/Components/Organisms/DetailProfileOrganism'

export default function Detail({ params }: { params: { id: string } }) {
  const { id: boardId } = params

  return (
    <div className="mb-7">
      <Header title="옷늘날씨" />
      <WeatherNavbar />
      <div className="space-y-3">
        <DetailProfileOrganism boardId={boardId} />
        <DetailOrganism boardId={boardId} />
      </div>
    </div>
  )
}

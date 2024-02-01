import Header from '@/Components/Molecules/Header'
import WeatherNavbar from '@/Components/Molecules/WeatherNavbar'
import DetailOrganism from '@/Components/Organisms/DetailOrganism'

export default function Detail({ params }: { params: { id: string } }) {
  const { id: boardId } = params

  return (
    <div className="h-screen">
      <Header title="옷늘날씨" />
      <WeatherNavbar />
      <DetailOrganism boardId={boardId} />
    </div>
  )
}

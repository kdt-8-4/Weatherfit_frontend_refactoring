import MainOrganism from '@/Components/Organisms/MainOrganism'
import NavBar from '@/Components/Molecules/NavBar'
import WeatherInfo from '@/Components/Molecules/WeatherInfo'
import MainHeader from '@/Components/Molecules/MainHeader'

export default function Home() {
  return (
    <>
      <MainHeader title="옷늘날씨" />
      <WeatherInfo />
      <MainOrganism />
      <NavBar />
    </>
  )
}

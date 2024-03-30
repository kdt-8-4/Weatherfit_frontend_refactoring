import MainOrganism from '@/Components/Organisms/main/MainOrganism'
import NavBar from '@/Components/Molecules/bar/NavBar'
import WeatherInfo from '@/Components/Organisms/main/WeatherInfo'
import MainHeader from '@/Components/Molecules/header/MainHeader'

export default function Home() {
  return (
    <>
      <MainHeader title="옷늘날씨" />
      <main>
        <WeatherInfo />
        <MainOrganism />
      </main>
      <NavBar />
    </>
  )
}

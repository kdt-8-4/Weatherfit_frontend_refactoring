import MainOrganism from '@/Components/Organisms/MainOrganism'
import NavBar from '@/Components/Molecules/NavBar'
import LikeAndComment from '@/Components/Molecules/LikeAndComment'
import WeatherInfo from '@/Components/Molecules/WeatherInfo'

export default function Home() {
  return (
    <>
      <WeatherInfo />
      <MainOrganism />
      <LikeAndComment />
      <NavBar />
    </>
  )
}

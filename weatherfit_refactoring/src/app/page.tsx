import IconStore, { IconStyle } from '../Components/Atoms/Icon/IconStore'
import InputStore, { InputStyle } from '@/Components/Atoms/Input/InputStore'
import ButtonStore, { ButtonStyle } from '@/Components/Atoms/Button/ButtonStore'
import ImageUpload from '@/Components/Organisms/ImageUpload'
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

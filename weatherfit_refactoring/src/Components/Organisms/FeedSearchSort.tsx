import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'

import Header from '../Molecules/Header'
import FeedLogo from '../Molecules/FeedLogo'
import FeedSearch from '../Molecules/FeedSearch'
import FeedTopCategory from '../Molecules/FeedTopCategory'
import WeatherNavbar from '../Molecules/WeatherNavbar'
import FeedCategory from '../Molecules/FeedCategory'
import FeedSortBase from '../Molecules/FeedSortBase'

export default function FeedSearchSort() {
  return (
    <div className="relative">
      <Header title="옷늘날씨" buttonStyleCase={ButtonStyle.TEXT_BTN} />
      <nav>
        <FeedSearch />
        <FeedTopCategory />
        <WeatherNavbar />
        <FeedCategory />
        <FeedSortBase />
      </nav>
    </div>
  )
}

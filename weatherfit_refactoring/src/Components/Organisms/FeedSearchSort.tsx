import ButtonStore, { ButtonStyle } from '../Atoms/Button/ButtonStore'

import Header from '../Molecules/header/Header'
import WeatherNavbar from '../Molecules/WeatherNavbar'
import FeedCategory from '../Molecules/FeedCategory'
import FeedSearch from '../Molecules/post/FeedSearch'
import FeedSortBase from '../Molecules/post/FeedSortBase'
import FeedTopCategory from '../Molecules/post/FeedTopCategory'

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

import ButtonStore, { ButtonStyle } from '../../Atoms/Button/ButtonStore'

import Header from '../../Molecules/header/Header'
import FeedSearch from '../../Molecules/post/FeedSearch'
import FeedTopCategory from '../../Molecules/post/FeedTopCategory'
import WeatherNavbar from '../../Molecules/WeatherNavbar'
import FeedCategory from '../../Molecules/FeedCategory'
import FeedSortBase from '../../Molecules/post/FeedSortBase'

export default function FeedSearchSort() {
  return (
    <div className="relative">
      <Header title="옷늘날씨" buttonStyleCase={ButtonStyle.TEXT_BTN} />
      <header>
        <FeedSearch />
        <FeedTopCategory />
        <WeatherNavbar />
        <FeedCategory />
        <FeedSortBase />
      </header>
    </div>
  )
}

import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";

import FeedLogo from "../Molecules/FeedLogo";
import FeedSearch from "../Molecules/FeedSearch";
import FeedTopCategory from "../Molecules/FeedTopCategory";
import WeatherNavbar from "../Molecules/WeatherNavbar";
import FeedCategory from "../Molecules/FeedCategory";
import FeedSortBase from "../Molecules/FeedSortBase";

export default function FeedSearchSort(){

    return (
    <div className="relative">
        <FeedLogo textSize="15px" />
        <FeedSearch />
        <FeedTopCategory />
        <WeatherNavbar/>
        <FeedCategory/>
        <FeedSortBase/>
    </div>)
}
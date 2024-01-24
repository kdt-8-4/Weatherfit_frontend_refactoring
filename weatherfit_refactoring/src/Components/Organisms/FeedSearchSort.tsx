import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";

import FeedLogo from "../Molecules/FeedLogo";
import FeedSearch from "../Molecules/FeedSearch";
import WeatherNavbar from "../Molecules/WeatherNavbar";
import FeedSortBase from "../Molecules/FeedSortBase";

export default function FeedSearchSort(){

    return (
    <div>
        <FeedLogo textSize="15px" />
        <FeedSearch />
        <WeatherNavbar/>
        <FeedSortBase/>
    </div>)
}
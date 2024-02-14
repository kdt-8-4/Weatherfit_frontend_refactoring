import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";

import FeedLogo from "../Molecules/FeedLogo";
import FeedSearch from "../Molecules/FeedSearch";
import Feedbestcody from "../Molecules/Feedbestcody";
import WeatherNavbar from "../Molecules/WeatherNavbar";
import FeedCategory from "../Molecules/FeedCategory";
import FeedSortBase from "../Molecules/FeedSortBase";

export default function FeedSearchSort(){

    return (
    <div>
        <FeedLogo textSize="15px" />
        <FeedSearch />
        <Feedbestcody />
        <WeatherNavbar/>
        <FeedCategory/>
        <FeedSortBase/>
    </div>)
}
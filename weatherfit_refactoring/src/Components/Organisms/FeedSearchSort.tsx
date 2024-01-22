import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";

import FeedLogo from "../Molecules/FeedLogo";
import FeedSearch from "../Molecules/FeedSearch";
import WeatherNavbar from "../Molecules/WeatherNavbar";

export default function FeedSearchSort(){



    const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("정렬할 기준", event.target.value);
    }

    return (
    <div>
        <FeedLogo textSize="15px" />
        <FeedSearch />
        <WeatherNavbar/>
        <div className="flex flex-row-reverse border-b-[1px] py-[5px]">
            <select className=" font-NanumSquareRound font-semibold outline-none text-[14px] px-1" onChange={handleSort}>
                <option>최신순</option>
                <option>추천순</option>
                <option>오래된순</option>
            </select>
        </div>
    </div>)
}
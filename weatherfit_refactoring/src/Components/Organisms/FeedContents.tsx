import axios from "axios";

import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";
import feedDummy from "../../../public/dummy_data/feed.json";
import { FeedData } from "@/Store/FeedData";
import { FeedSort } from "@/Store/FeedSort";
import { WeatherTempMax } from "@/Store/WeatherMaxTemp";
import { WeatherTempMin } from "@/Store/WeatherMinTemp";
import FeedContent from "../Molecules/FeedContent";
import { useEffect } from "react";

export default async function FeedContents (){ 

    // const {feedData, setFeedData} = FeedData();

    const feedDataFetch = await fetch("https://www.jerneithe.site/board/list",{
        method : "GET"
    })

    const feedContentsData:FEEDDATA[] = await feedDataFetch.json();
    
    
    return (<div className="mt-5 flex flex-wrap">
        {feedContentsData.map((feedDataArr)=>{
            return(
                <div key={feedDataArr.boardId}>
                    <FeedContent 
                        feedData={feedDataArr}
                    />
                </div>
            )

        })}
    </div>)
}

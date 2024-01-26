import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";
import feedDummy from "../../../public/dummy_data/feed.json";
import { FeedData } from "@/Store/FeedData";
import { FeedSort } from "@/Store/FeedSort";
import { WeatherTempMax } from "@/Store/WeatherMaxTemp";
import { WeatherTempMin } from "@/Store/WeatherMinTemp";
import FeedContent from "../Molecules/FeedContent";
import { useEffect } from "react";

export default function FeedContents(){ 

    const { feedData, setFeedData } = FeedData();
    const { feedSort } = FeedSort();
    const {temperatureMax} = WeatherTempMax();
    const {temperatureMin} = WeatherTempMin();

    console.log("피드 더미 데이터", feedDummy.feed_data);
    console.log("최고 최저", temperatureMax, temperatureMin);

    const sortedData: FEEDATA[] = [...feedDummy.feed_data].sort((a :FEEDATA, b: FEEDATA) => {
        const dateA = new Date(a.createDate);
        const dateB = new Date(b.createDate);
        return dateB.getTime() - dateA.getTime(); // 최신 날짜 순으로 정렬
    });
    
    const filterFunction = () => {
        const filterByTemperature = sortedData.filter(
            (item) => 
            item.temperature >= temperatureMin &&
            item.temperature <= temperatureMax,
        )
    
        setFeedData(sortedData);
    }

    //useEffect를 안쓰면 무한루프 돌던데 어떻게 해야하나요..
    useEffect(() => {
        filterFunction();
    },[]);

    return (<div>
        <div className="my-3 text-center">
            <ButtonStore 
                buttonStyle={ButtonStyle.DEFAULT_BTN_BLUE} 
                style={`font-neurimboGothic font-semibold text-[15px] bg-A8C6EC m-auto pt-[0px] pb-[4px] w-[70px]`}>
                {feedSort}
            </ButtonStore>
        </div>
        <div className="mt-5 flex flex-wrap">
            {feedData ? (
                feedData.map((arr)=>{
                    return(<FeedContent 
                        images={arr.images} 
                        nickName={arr.nickName} 
                        temperature={arr.temperature} 
                        weatherIcon={arr.weatherIcon}
                        
                        boardId={arr.boardId}
                        createDate={arr.createDate}
                        likeCount={arr.likeCount}
                        likelist={arr.likelist}
                        weather={arr.weather}
                        />)
                })
            ) : (
                <div className=" font-gmarketsans">데이터를 불러오고 있습니다.</div>
            )
            }
            
        </div>
    </div>)
}
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore"
import InputStore from "../Atoms/Input/InputStore"
import IconStore from "../Atoms/Icon/IconStore"
import { FeedData } from "@/Store/FeedData"
import FeedContent from "../Molecules/FeedContent"
import { useEffect } from "react"

interface LIKE {
    likeId : number;
    nickName: string;
  }
  

interface IMAGE {
    boardId: number;
    imageId: number;
    imageUrl: string;
  }

interface FEEDATA {
    boardId: number;
    images: IMAGE;
    createDate: string;
    likeCount: number;
    likelist: LIKE[];
    nickName: string;
    temperature: number;
    weather: string;
    weatherIcon?: string;
  }
  

export default function FeedContents(){ 

    const { feedData, setFeedData } = FeedData();

    useEffect(()=>{
        const feedData = async() => {
            const req = await fetch("https://www.jerneithe.site/board/list",{method:"GET"});
            console.log("피드데이터 잘 받아지나?", req);

            //콘텐츠 정렬
            // const sortedData: FEEDATA[] = [...req.data].sort((a :FEEDATA, b: FEEDATA) => {
            //     const dateA = new Date(a.createDate);
            //     const dateB = new Date(b.createDate);
            //     return dateB.getTime() - dateA.getTime(); // 최신 날짜 순으로 정렬
            // });

            // const copy: FEEDATA[] = sortedData;

            //온도 범위 내 콘텐츠 표시
            // const filter_of_tem = copy.filter(
            //     (item) =>
            //       item.temperature >= parseFloat(min) &&
            //       item.temperature <= parseFloat(max),
            //   );
        }

        

        feedData();
    },[]);


    return (<div>
        <div className="my-3 text-center">
            <ButtonStore 
                buttonStyle={ButtonStyle.DEFAULT_BTN_BLUE} 
                style={`font-neurimboGothic font-semibold text-[15px] bg-A8C6EC m-auto pt-[0px] pb-[4px] w-[70px]`}>
                HOT
            </ButtonStore>
        </div>
        <div className="mt-5">
            <FeedContent />
        </div>
    </div>)
}
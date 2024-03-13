"use client"
import BestCategory from "../../../public/dummy_data/bestcategory.json";
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";
import { FeedData } from "@/Store/FeedData";

export default function FeedTopCategory(){
    const {feedData, setFeedData} = FeedData()
    

    const topCategory:string[] = BestCategory.best_category_data

    const gotoCategory = async(restopCategory:string) => {
        console.log("클릭한 카테고리 검색으로 이동")
        const clickCategoryData = await fetch(`https://www.jerneithe.site/board/search?categories=${restopCategory}`,{
            method: "GET"
        })
        const clickCategoryDataToJson:FEEDDATA[] = await clickCategoryData.json()
        setFeedData(clickCategoryDataToJson)
    }

    return (
        <div className=" mb-1">
            <div className="m-auto flex ">
                <p className=" font-neurimboGothic whitespace-nowrap mx-1.5 w-[120px]">오늘의 카테고리 :</p>
                <div className="flex overflow-hidden whitespace-nowrap w-[calc(55px*10)]">
                    {topCategory.concat(topCategory).map((topcategory, index)=>{
                        return(
                            <ButtonStore key={index} buttonStyle={ButtonStyle.CATEGORY_BTN_CHECKED} style="font-NanumSquareRound mx-1 p-1 w-[60px] h-[30px] relative animate-topCategory" onClickFunction={()=>gotoCategory(topcategory)} >
                                {topcategory}
                            </ButtonStore>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
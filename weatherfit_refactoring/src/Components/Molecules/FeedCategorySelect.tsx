import { CategoryData } from "@/Store/CategoryData"
import { CategorySelectData } from "@/Store/CategorySelectData";
import { useState } from "react";

export default function FeedCategorySelect () {

    const {categoryData} = CategoryData();
    const {selectData, setSelectData} = CategorySelectData();
    const [categoryTitleStyle, setCategoryTitleStyle] = useState<string>("");
    

    const selectCategory = (selectedCategory: string) => {
        console.log("선택한 카테고리 타이틀", selectedCategory)
    }

    const selectCancle = (selectCancle : string) => {
        console.log("삭제할 카테고리 목록", selectCancle);
    }

    return (
        <div className="">
            <div className=" text-center font-neurimboGothic">
               <span>Ｘ</span>
               카테고리 
            </div>
            <div className=" flex whitespace-nowrap">
                {categoryData.map((val)=>{
                    return(
                        <p key={val.id} onChange={()=>selectCategory(val.val)} className={categoryTitleStyle}>{val.title}</p>
                    )
                })}
            </div>
            <div>
                {}
            </div>
            <div className="flex">
                {selectData.map((val, index)=>{
                    return(
                        <p key={index}>
                            {val}
                            <button onClick={()=>selectCancle(val)}> x</button>
                        </p>
                    )
                })}
            </div>
            <div className=" font-gmarketsans flex">
                <button >초기화</button>
                <button >선택 카테고리 검색하기</button>
            </div>
        </div>
    )
}
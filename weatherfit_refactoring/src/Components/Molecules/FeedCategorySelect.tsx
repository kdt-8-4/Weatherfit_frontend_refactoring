import { CategoryData } from "@/Store/CategoryData"
import { CategorySelectData } from "@/Store/CategorySelectData";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
    setControl: Dispatch<SetStateAction<boolean>>;
}

export default function FeedCategorySelect ({setControl} : Props) {

    const {categoryData} = CategoryData();
    const {selectData, setSelectData} = CategorySelectData();
    const [categoryTitleStyle, setCategoryTitleStyle] = useState<string>("");
    

    const selectCategory = (selectedCategory: string) => {
        console.log("선택한 카테고리 타이틀", selectedCategory);
        // categoryData.find()
        
    }

    const selectCancle = (selectCancle : string) => {
        console.log("삭제할 카테고리 목록", selectCancle);
    }

    const cancleSelectCategory = () => {
        setControl(false);
    }

    return (
        <div className=" relative z-10">
            <div className=" text-center font-neurimboGothic">
               <span onClick={cancleSelectCategory} >Ｘ</span>
               카테고리 
            </div>
            <div className=" flex whitespace-nowrap">
                {categoryData.map((categoryTitle)=>{
                    return(
                        <p key={categoryTitle.id} onClick={()=>selectCategory(categoryTitle.value)} className={categoryTitleStyle}>{categoryTitle.title}</p>
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
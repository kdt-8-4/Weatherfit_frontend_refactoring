import { CategoryData } from "@/Store/CategoryData"
import { CategorySelectData } from "@/Store/CategorySelectData";
import { unstable_getStaticParams } from "next/dist/build/templates/pages";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
    setControl: Dispatch<SetStateAction<boolean>>;
}

export default function FeedCategorySelect ({setControl} : Props) {

    const {categoryData} = CategoryData();
    const {selectData, setSelectData} = CategorySelectData();
    const [categoryTitleStyle, setCategoryTitleStyle] = useState<string>("");
    const [categoryList, setCategoryList] = useState<SelecList[]>([]);

    const selectCategory = (selectedCategory: string) => {
        console.log("선택한 카테고리 타이틀", selectedCategory);
        const filtering:TabMenu[] = categoryData.filter((categorydata) => categorydata.value == selectedCategory)
        setCategoryList(filtering[0].selectLists)
    }

    const categorySearch = (inputData : string) => {
        setSelectData([...selectData, inputData])
    }

    const selectCancle = (selectCancle : string) => {
        const filterCansleCategory:string[] = selectData.filter((selectdata) => selectdata != selectCancle)
        console.log("삭제할 카테고리", selectCancle);
        setSelectData(filterCansleCategory)
    }

    const cancleSelectCategory = () => {
        setControl(false);
    }

    const resetCategory = () => {
        setSelectData([])
    }

    const searchCategory = () => {
        // 상위 컴포넌트에서 함수 받아온후 바로 실행해버리자
    }

    return (
        <div className=" absolute z-50 bg-white w-[100vw] h-[600px]  ">
            <div className="text-center font-neurimboGothic my-2">
               <button onClick={cancleSelectCategory} className="mr-[150px]">Ｘ</button>
               <span className="mr-[140px]">카테고리</span> 
            </div>
            <div className=" flex whitespace-nowrap space-x-6 mx-8 font-gmarketsans">
                {categoryData.map((categoryTitle)=>{
                    return(
                        <button key={categoryTitle.id} 
                        onClick={()=>selectCategory(categoryTitle.value)} 
                        className={categoryTitleStyle}>
                            {categoryTitle.title}
                        </button>
                    )
                })}
            </div>
            <div className="h-[400px]">
                {categoryList && 
                    categoryList.map((categoryList)=>{
                        return(
                            <button key={categoryList.list_id} 
                            className="m-2 p-1 border-[1px] rounded-lg border-black  font-NanumSquareRound" 
                            onClick={()=>categorySearch(categoryList.selectList)}>
                                {categoryList.selectList}
                            </button>
                        )
                    })
                }
            </div>
            <div className="flex overflow-x-auto h-[50px]">
                {selectData.map((data, index)=>{
                    return(
                        <p key={index} className=" whitespace-nowrap m-2 p-1 border-[1px] rounded-lg border-black  font-NanumSquareRound">
                            {data}
                            <button onClick={()=>selectCancle(data)}> x</button>
                        </p>
                    )
                })}
            </div>
            <div className=" font-gmarketsans flex">
                <button className=" bg-white w-[25%]  border-[1px] mx-1 p-1" onClick={resetCategory}>초기화</button>
                <button className="bg-blue-300 w-[70%] text-white mx-1 p-1" onClick={searchCategory}>선택 카테고리 검색하기</button>
            </div>
        </div>
    )
}
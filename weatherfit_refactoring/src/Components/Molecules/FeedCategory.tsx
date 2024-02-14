"use client"
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore"
import { CategoryData } from "@/Store/CategoryData"
import IconStore, { IconStyle } from "../Atoms/Icon/IconStore";
import { useState } from "react";
import FeedCategorySelect from "./FeedCategorySelect";


export default function FeedCategory() {
    
    const {categoryData} = CategoryData();
    const [tabControl, setControl] = useState<boolean>(false);

    const tabBooleanControl = () => {
        if(tabControl == false) {
            setControl(true);
        } else {
            setControl(false);
        }
    }


    return (
        <div>
            <div onClick={tabBooleanControl} className=" font-NanumSquareRound flex flex-nowrap overflow-y-scroll my-1">
            {
                categoryData.map((val) => {
                    return<ButtonStore buttonStyle={ButtonStyle.CATEGORY_BTN} key={val.id} style="h-[30px] p-1 m-1 flex whitespace-nowrap">
                          {val.title} 
                          <IconStore iconStyle={IconStyle.TOGGLE2} size={20} />
                    </ButtonStore>
                })
            }
            </div>
            {tabControl && <FeedCategorySelect />}
        </div>


    )
}
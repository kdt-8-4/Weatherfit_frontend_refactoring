"use client"
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore"
import { CategoryData } from "@/Store/CategoryData"
import IconStore, { IconStyle } from "../Atoms/Icon/IconStore";
import FeedCategorySelect from "./FeedCategorySelect";
import { CategoryControl } from "@/Store/CategoryControl";

export default function FeedCategory() {
    
    const {categoryData} = CategoryData();
    const {categoryControl, setCategoryControl} = CategoryControl()

    const tabBooleanControl = () => {
        if(categoryControl == false) {
            setCategoryControl(true);
        } else {
            setCategoryControl(false);
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
            {categoryControl && <FeedCategorySelect/>}
        </div>


    )
}
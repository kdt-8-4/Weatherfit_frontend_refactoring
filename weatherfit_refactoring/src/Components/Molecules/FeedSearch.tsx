"use client"

import IconStore, { IconStyle } from "../Atoms/Icon/IconStore";
import InputStore, { InputStyle } from "../Atoms/Input/InputStore";
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";

export default function FeedSearch(){

    const searchCancle = () => {

    }

    return(
        <div className=" flex py-[10px] px-[10px]">
            <div className="flex border rounded-[9px] mx-1">
                <InputStore 
                    inputStyle={InputStyle.INPUT_SEARCH} 
                    placeholderContents="#해시태그를 입력하세요" 
                    style="font-gmarketsans font-thin outline-none text-[14px] w-[65vw] h-[38px] mx-1"/>
                <IconStore 
                    iconStyle={IconStyle.SEARCH} 
                    size={16} 
                    style="mr-[10px]"/>
            </div>
            <ButtonStore 
                buttonStyle={ButtonStyle.CANCLE_BTN} 
                style="font-NanumSquareRound text-gray-500 text-[16px] w-[70px]" 
                onClickFunction={searchCancle}>
                취소
            </ButtonStore>
        </div>
    )
}
"use client"

import IconStore, { IconStyle } from "../Atoms/Icon/IconStore";
import InputStore, { InputStyle } from "../Atoms/Input/InputStore";
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";
import { ChangeEventHandler, useEffect, useState } from "react";

export default function FeedSearch(){

    const [hashValue, setHashValue] = useState<string>("");
    let url = "https://www.jerneithe.site/board/search?categories="

    const inputHashTag = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHashValue(e.target.value)
    }

    const hashTagArrayClear = () => {
        setHashValue("");
    }

    const searchHashTag = async() => {
        
        hashToArray()
        //백엔드에서 따로 검색 구현할 시
        // const callHashData = await fetch(url, {
        //     method: "GET"
        // })

        // const callDataToJson = await callHashData.json()
    }

    const hashToArray = () => {
        const searchHashtagData:string[] = hashValue.split('#').filter(Boolean);
        console.log('해시태그 검색 배열', searchHashtagData);
        
        for(let i=0; i<searchHashtagData.length ; i++) { 
                url +=searchHashtagData[i];
        }
        console.log("검색 url", url)
    }



    return(
        <div className=" flex py-[10px] px-[10px]">
            <div className="flex border rounded-[9px] mx-1">
                <InputStore 
                    value={hashValue}
                    onChageFunction={inputHashTag}
                    inputStyle={InputStyle.INPUT_SEARCH} 
                    inputType="text"
                    placeholderContents="#해시태그를 입력하세요" 
                    style="font-gmarketsans font-thin outline-none text-[14px] w-[65vw] h-[38px] mx-1"
                    />
                <IconStore 
                    iconStyle={IconStyle.SEARCH} 
                    size={16} 
                    style="mr-[10px]"
                    onClickFunction={searchHashTag}
                    />
            </div>
            <ButtonStore 
                buttonStyle={ButtonStyle.CANCEL_BTN} 
                style="font-NanumSquareRound text-gray-500 text-[16px] w-[70px]" 
                onClickFunction={hashTagArrayClear}>
                취소
            </ButtonStore>
        </div>
    )
}

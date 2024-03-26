"use client"

import BoxStore, { BoxStyle } from "../Atoms/Box/BoxStore"
import { useRouter } from "next/navigation"

export default function RegisterLogo(){
    const router = useRouter();
    
    const ClickToMain = () => {
        router.push('/');
    }
    
    return (
        <div>
            <BoxStore
                boxStyle={BoxStyle.BOX_BLUE}
                style={`absolute left-1/2 transform -translate-x-1/2 px-2 h-[25px] font-neurimboGothic text-[18px] pb-[7px] shadow-[7px_7px_1px] flex items-center cursor-pointer`}
                onClickFunction={ClickToMain}>
                {'옷늘날씨'}
            </BoxStore>
            <p className=" font-neurimboGothic text-center mt-[45px] text-[28px]">
                회 원 가 입        
            </p>
        </div>
    )
}
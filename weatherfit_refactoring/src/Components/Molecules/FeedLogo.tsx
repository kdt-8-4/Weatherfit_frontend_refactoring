'use client'
import { useRouter } from "next/navigation";
import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore"
import IconStore, { IconStyle } from "../Atoms/Icon/IconStore";

interface Props {
    textSize : string;
}

export default function FeedLogo({textSize}:Props){

    const router = useRouter()

    const onClickToMain = () => {
        router.push('/')
    }

    return(
        <div className="flex mt-3 text-center">
            <IconStore
                iconStyle={IconStyle.PREV2}
                size={20}
                style="ml-[10px] cursor-pointer"
                onClickFunction={() => window.history.back()}
            />
            <ButtonStore 
                buttonStyle={ButtonStyle.DEFAULT_BTN_BLUE} 
                style={`font-neurimboGothic font-semibold text-[${textSize}] ml-[135px] mr-[147.5px] pt-[0px] pb-[4px] w-[65px]`}
                onClickFunction={onClickToMain}
                >
                옷늘날씨
            </ButtonStore>
        </div>
    )
}
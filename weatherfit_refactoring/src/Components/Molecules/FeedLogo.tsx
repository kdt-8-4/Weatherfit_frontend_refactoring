import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore"

interface Props {
    textSize : string;
}

export default function FeedLogo({textSize}:Props){

    return(
        <div className="my-3 text-center">
            <ButtonStore 
                buttonStyle={ButtonStyle.DEFAULT_BTN_BLUE} 
                style={`font-neurimboGothic font-semibold text-[${textSize}] m-auto pt-[0px] pb-[4px] w-[65px]`}>
                옷늘날씨
            </ButtonStore>
        </div>
    )
}
import Image from "next/image";
import { MouseEventHandler } from "react";

export enum ButtonStyle {
    DEFAULT_BTN = "DEFAULT_BTN",
    DEFAULT_BTN_FILL = "DEFAULT_BTN_FILL",
    GOOGLE_BTN = "GOOGLE_BTN",
    CATEGORY_BTN = "CATEGORY_BTN",
    CATEGORY_BTN_Y = "CATEGORY_BTN_Y",
    CATEGORY_BTN_FILL = "CATEGORY_BTN_FILL",
    SIGNUP_BTN = "SIGNUP_BTN",
    CONFIRM_BTN = "CONFIRM_BTN",
}

interface Props {
    buttonStyle: ButtonStyle;
    design?: string;
    fontsize?: string;
    btnwidth?:number;
    btnheight?:number;
    btnName?:string;
    font?:string;
    onClickFunction?: MouseEventHandler<HTMLButtonElement> | undefined;
    children: React.ReactNode;
}
//높이 조정도 필요하면 가져다 쓰세요

export default function ButtonStore({buttonStyle, design, fontsize, children, btnName, btnwidth, btnheight, font, onClickFunction}: Props) {
    const selectButton = (): React.ReactNode => {
        switch (buttonStyle) {
            case ButtonStyle.DEFAULT_BTN:
                return <button 
                className={`${font} bg-white border border-black rounded-xl z-10`}
                style={{width:`${btnwidth}px`,height:`${btnheight}px`, boxShadow:"7px 7px 1px"}}
                onClick={onClickFunction}
                >{btnName}
                </button>
            case ButtonStyle.DEFAULT_BTN_FILL:
                return <button 
                className={`${font} bg-yellow-200 border border-black rounded-xl z-10`}
                style={{width:`${btnwidth}px`, height:`${btnheight}px`, boxShadow:"7px 7px 1px"}}
                onClick={onClickFunction}
                >{btnName}
                </button>
            case ButtonStyle.CATEGORY_BTN:
                return <button
                className={`${font} bg-white border border-black rounded-2xl`}
                style={{width:`${btnwidth}px`, height:`${btnheight}px`}}
                onClick={onClickFunction}
                >
                    {btnName}
                </button>
            case ButtonStyle.CATEGORY_BTN_Y:
                return <button
                className={`${font} bg-yellow-200 border-black rounded-2xl`}
                style={{width:`${btnwidth}px`, height:`${btnheight}px`}}
                onClick={onClickFunction}
                >
                    {btnName}
                </button>
            case ButtonStyle.CATEGORY_BTN_FILL:
                return <button
                className={`${font} bg-blue-300 rounded-2xl`}
                style={{width:`${btnwidth}px`, height:`${btnheight}px`}}
                onClick={onClickFunction}
                >
                    {btnName}
                </button>
            case ButtonStyle.CONFIRM_BTN:
                return <button
                className={`${font} bg-yellow-200 border border-black rounded-lg`}
                style={{width:`${btnwidth}px`, height:`${btnheight}px`}}
                onClick={onClickFunction}
                >{btnName}
                </button>
            case ButtonStyle.GOOGLE_BTN:
                return <button
                className={` ${font} bg-white border border-black rounded-lg p-2`}
                style={{width:`${btnwidth}px`, height:`${btnheight}px`}}
                onClick={onClickFunction}
                >
                <div className="flex m-auto" style={{width:"230px"}}>
                    <Image
                    src={"/google.svg"}
                    alt="구글"
                    width={19}
                    height={19}
                    ></Image>
                    <div className=" ml-2 pt-1">Google 계정으로 시작하기</div>
                </div>
                </button>
            case ButtonStyle.SIGNUP_BTN:
                return <button 
                className={`${font} text-slate-400`}
                style={{fontSize:`${fontsize}px`}}
                onClick={onClickFunction}
                >
                    회원가입
                </button>
            default:
                return null;
        }
    }

    return(<>
        {
            selectButton()
        }
    </>)

}
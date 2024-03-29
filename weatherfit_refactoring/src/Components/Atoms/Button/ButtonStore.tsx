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
    fontsize?:string;//회원가입 버튼에서 사용 회원가입 다 만들고 크기가 지정됐다면 그냥 지정해주고 없애주세요
    style?:string;
    //여기서 w-[100px] h-[50px] m-auto로 적으면 버튼 넓이랑 높이 그리고 마진이나 다른 것들도 지정할 수 있어요
    onClickFunction?: MouseEventHandler<HTMLButtonElement> | undefined;
    children?: React.ReactNode;
}
//높이 조정도 필요하면 가져다 쓰세요

export default function ButtonStore({buttonStyle, fontsize, children, onClickFunction, style}: Props) {
    const selectButton = (): React.ReactNode => {
        switch (buttonStyle) {
            case ButtonStyle.DEFAULT_BTN:
                return <button 
                className={`${style} bg-white border border-black rounded-xl z-10`}
                style={{boxShadow:"7px 7px 1px"}}
                onClick={onClickFunction}
                >{children}
                </button>
            case ButtonStyle.DEFAULT_BTN_FILL:
                return <button 
                className={`${style} bg-yellow-200 border border-black rounded-xl z-10`}
                style={{boxShadow:"7px 7px 1px"}}
                onClick={onClickFunction}
                >{children}
                </button>
            case ButtonStyle.CATEGORY_BTN:
                return <button
                className={`${style} bg-white border border-black rounded-2xl`}
                onClick={onClickFunction}
                >
                    {children}
                </button>
            case ButtonStyle.CATEGORY_BTN_Y:
                return <button
                className={`${style} bg-yellow-200 border-black rounded-2xl`}
                onClick={onClickFunction}
                >
                    {children}
                </button>
            case ButtonStyle.CATEGORY_BTN_FILL:
                return <button
                className={`${style} bg-blue-300 rounded-2xl`}
                onClick={onClickFunction}
                >
                    {children}
                </button>
            case ButtonStyle.CONFIRM_BTN:
                return <button
                className={`${style} bg-yellow-200 border border-black rounded-lg`}
                onClick={onClickFunction}
                >{children}
                </button>
            case ButtonStyle.GOOGLE_BTN:
                return <button
                className={` ${style} bg-white border border-black rounded-lg p-2`}
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
                className={`${style} text-slate-400`}
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
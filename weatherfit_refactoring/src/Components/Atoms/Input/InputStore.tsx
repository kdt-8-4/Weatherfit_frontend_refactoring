import Image from "next/image";
import { FormEventHandler} from "react";

export enum InputStyle {
    INPUT_WHITE = "INPUT_WHITE",
    INPUT_IMAGE = "INPUT_IMAGE",
}
//INPUT_IMAGE는 크기 고정이라서 여기 아톰에서 w-40랑 h-64 수정해주면 돼요

interface Props {
    inputStyle: InputStyle;
    placeholderContents?:string;
    style?:string;
    onChageFunction?: FormEventHandler<HTMLDivElement> | undefined;
}

export default function InputStore({inputStyle,placeholderContents, onChageFunction, style}: Props) {
    const selectInput = (): React.ReactNode => {
        switch (inputStyle) {
            case InputStyle.INPUT_WHITE:
                return <input type="text" 
                className={`border rounded-lg bg-white border-gray-500 p-1 ${style}`} 
                placeholder={placeholderContents}
                />
            case InputStyle.INPUT_IMAGE:
                return <div className="border rounded-2xl w-40 h-64" style={{backgroundColor:"#F1EDED"}} onChange={onChageFunction}>
                    <Image
                    style={{margin:"auto", padding:"100px 0px" }}
                    src={"/icon_svg/add.svg"}
                    alt="add"
                    width={25}
                    height={25}
                    />
                </div>
            default:
                return null;
        }
    }

    return (
        <>
        {
            selectInput()
        }
        </>
    )
}
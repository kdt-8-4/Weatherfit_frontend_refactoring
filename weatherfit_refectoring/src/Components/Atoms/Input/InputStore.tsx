import Image from "next/image";
import { FormEventHandler} from "react";

export enum InputStyle {
    INPUT_WHITE = "INPUT_WHITE",
    INPUT_IMAGE = "INPUT_IMAGE",
}

interface Props {
    inputStyle: InputStyle;
    children: React.ReactNode;
    widthInput?: number;
    placeholderContents?:string;
    onChageFunction?: FormEventHandler<HTMLDivElement> | undefined;//이렇게 해도 되나..??
}

export default function InputStore({inputStyle, children, widthInput,placeholderContents, onChageFunction}: Props) {
    const selectInput = (): React.ReactNode => {
        switch (inputStyle) {
            case InputStyle.INPUT_WHITE:
                return <input type="text" 
                className={`border rounded-lg bg-white border-gray-500 p-1`} 
                placeholder={placeholderContents} 
                style={{width:`${widthInput}px`}}>     
                </input>
            case InputStyle.INPUT_IMAGE:
                return <div className="border rounded-2xl w-40 h-64" style={{backgroundColor:"#F1EDED"}} onChange={onChageFunction}>
                    <Image
                    style={{margin:"auto", padding:"100px 0px" }}
                    src={"/icon_svg/add.svg"}
                    alt="add"
                    width={25}
                    height={25}
                    ></Image>
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
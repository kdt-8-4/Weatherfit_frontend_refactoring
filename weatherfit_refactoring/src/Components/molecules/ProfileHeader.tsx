// "use client"
import IconStore, { IconStyle } from "../Atoms/Icon/IconStore";

export default function ProfileHeader(){
    return(
        <>
        <div className="flex items-center justify-between h-[50px]">
        <IconStore iconStyle={IconStyle.PREV2} size={20} style={"ml-[10px]"}/>
        <p className="font-neurimboGothic text-[22px]">프로필</p>
        <IconStore iconStyle={IconStyle.SETTING} size={17} style={"mr-[10px]"}/>
        </div>
        </>
    )
}
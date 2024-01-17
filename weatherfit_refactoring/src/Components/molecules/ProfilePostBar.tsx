import ButtonStore, { ButtonStyle } from "../Atoms/Button/ButtonStore";

export default function ProfilePostBar() {
    return (
        <>
        <div className="flex justify-evenly">
            <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN_FILL} style="font-neurimboGothic w-[100px]">피드</ButtonStore>
            <ButtonStore buttonStyle={ButtonStyle.DEFAULT_BTN} style="font-neurimboGothic w-[100px]">좋아요</ButtonStore>
        </div>
        </>
    )
}
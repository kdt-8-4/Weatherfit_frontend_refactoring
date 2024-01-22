import Image from "next/image"
import IconStore, { IconStyle } from "../Atoms/Icon/IconStore"

export default function FeedContent() {

    return (
        <div className=" bg-E4E4E6 rounded-xl mx-2 w-[180px] h-[280px]">
            <div className="flex justify-between m-auto w-[90%] py-2">
                <div className="flex">
                    <div className=" relative w-[40px] h-[40px]">
                        <Image
                        src={"https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90"}
                        alt="프로필 사진"
                        fill
                        className="rounded-full"
                        />
                    </div>
                    <div>
                        <p className=" font-Cafe24SsurroundAir text-[13px]">아이유</p>
                        <p className=" font-NanumSquareRound text-[10px]">@iamiu</p>
                    </div>
                </div>
                <div>
                    <IconStore iconStyle={IconStyle.ETC} size={30}/>
                </div>
            </div>
            <div className=" relative m-auto w-[90%] h-[75%]">
                <Image 
                src={"https://cdn.peacedoorball.blog/wp-content/uploads/2024/01/iu-sends-uaenas-into-whiplash-with-her-new-bleached-hair-ahead-of-2024-comeback-something-big-is-coming.webp"}
                alt="코디 사진"
                fill
                className="border border-black rounded-xl"
                />
            </div>
            <div>
                
            </div>
        </div>
    )
}
import Image from 'next/image'
import IconStore, { IconStyle } from '../Atoms/Icon/IconStore'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function FeedContent({
  boardId,
  createDate,
  likeCount,
  likelist,
  weather,
  images,
  nickName,
  temperature,
  weatherIcon,
}: FEEDATA) {
  return (
    <div className=" bg-E4E4E6 rounded-xl mx-2 my-2 w-[179px] h-[340px]">
      <div className="flex justify-between m-auto w-[90%] py-2">
        <div className="flex">
          <div className=" relative w-[40px] h-[40px]">
            <Image
              src={
                'https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90'
              }
              alt="프로필 사진"
              fill
              className="rounded-full"
            />
          </div>
          <div>
            <p className=" font-Cafe24SsurroundAir text-[13px]">{nickName}</p>
            <p className=" font-NanumSquareRound text-[10px]">{createDate}</p>
          </div>
        </div>
        <div>
          <IconStore iconStyle={IconStyle.ETC} size={30} />
        </div>
      </div>
      <Link href={`/detail/${boardId}`}>
        <div className=" relative m-auto w-[90%] h-[218px]">
          <Image
            src={images[0]}
            alt="코디 사진"
            fill
            className="border border-black rounded-xl"
          />
        </div>
      </Link>
      <div className="flex justify-between m-auto w-[90%] py-2">
        <div className="flex">
          <div className="relative">
            <IconStore
              iconStyle={IconStyle.LIKE}
              size={25}
              style="relative top-[26%]"
            />
          </div>
          <div className="relative font-Cafe24SsurroundAir text-[13px]">
            <p className=" absolute top-[50%] translate-y-[-50%] w-[100%] h-auto">
              {likeCount}
            </p>
          </div>
        </div>
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
            alt="weatherIcon"
            width={40}
            height={40}
            loading="lazy"
          />
          <div>
            <p className="font-Cafe24SsurroundAir text-xs text-center">
              {temperature}℃
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

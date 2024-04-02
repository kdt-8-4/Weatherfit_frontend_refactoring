import Image from 'next/image'

interface Props {
  postData: FEEDDATA[]
}

export default function ProfilePost({ postData }: Props) {
  return (
    // <div>
    // <div className="grid grid-rows-[25vh_25vh_25vh] grid-cols-[1fr_1fr_1fr] gap-[1%] p-[10px]">
    <div className="relative grid auto-rows-[180px] grid-cols-[1fr_1fr_1fr] gap-[3px] p-[10px]">
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi2.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={'/images/codi1.jpg'}
          alt="게시물 이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
    // <>
    //   {postData.length > 0 ? (
    //     <div className="grid grid-rows-[25vh_25vh_25vh] grid-cols-[1fr_1fr_1fr] gap-[1%] p-[10px]">
    //       {postData.map(item => (
    //         <div key={item.boardId} className="rounded-lg w-[120px] h-[180px]">
    //           {item.images && (
    //             <Image
    //               src={item.images.imageUrl}
    //               alt="게시물 이미지"
    //               width={120}
    //               height={180}
    //               className="rounded-lg"
    //             />
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   ) : (
    //     <p className="post_box_p">게시물이 없습니다.</p>
    //   )}
    // </>
    // <div className="grid grid-rows-[25vh_25vh_25vh] grid-cols-[1fr_1fr_1fr] gap-[1%] p-[10px]">
    //   {postData.length > 0 ? (
    //     postData.map(item => (
    //       <div key={item.boardId} className="rounded-lg">
    //         {item.images && (
    //           <Image
    //             src={item.images.imageUrl}
    //             alt="게시물 이미지"
    //             width={120}
    //             height={180}
    //             className="rounded-lg"
    //           />
    //         )}
    //       </div>
    //     ))
    //   ) : (
    //     <>
    //       <p className="post_box_p">게시물이 없습니다.</p>
    //     </>
    //   )}
    //   {/* <div className="bg-[salmon] rounded-lg"></div> */}
    // </div>
  )
}

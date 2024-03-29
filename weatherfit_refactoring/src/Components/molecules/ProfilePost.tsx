import Image from 'next/image'

interface Props {
  postData: FEEDDATA[]
}

export default function ProfilePost({ postData }: Props) {
  console.log('postData: ', postData)
  return (
    <>
      {postData.length > 0 ? (
        <div className="grid grid-rows-[25vh_25vh_25vh] grid-cols-[1fr_1fr_1fr] gap-[1%] p-[10px]">
          {postData.map(item => (
            <div key={item.boardId} className="rounded-lg w-[120px] h-[180px]">
              {item.images && (
                <Image
                  src={item.images.imageUrl}
                  alt="게시물 이미지"
                  width={120}
                  height={180}
                  className="rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="post_box_p">게시물이 없습니다.</p>
      )}
    </>
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

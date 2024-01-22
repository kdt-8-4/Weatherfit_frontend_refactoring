export default function ProfileInfo() {
  return (
    <div className="flex items-center justify-evenly my-[10px]">
      <div className="flex items-center flex-col font-Cafe24SsurroundAir">
        <div className="bg-[black] h-[80px] rounded-[50%] w-[80px]"></div>
        <p className="font-bold">깜찍이</p>
      </div>
      <div className="flex items-center flex-col font-Cafe24SsurroundAir text-sm">
        <p className="font-bold">내 게시물</p>
        <p>23</p>
      </div>
      <div className="flex items-center flex-col font-Cafe24SsurroundAir text-sm">
        <p className="font-bold">좋아요 한 게시물</p>
        <p>147</p>
      </div>
    </div>
  )
}

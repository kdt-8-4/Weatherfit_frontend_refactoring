import DetailProfile from '@/Components/Molecules/DetailProfile'
import Header from '@/Components/Molecules/Header'
import WeatherNavbar from '@/Components/Molecules/WeatherNavbar'

export default function Detail() {
  return (
    <div className="h-screen">
      <Header title="옷늘날씨" />
      <WeatherNavbar />
      <div className="mx-5 h-full">
        {/* 프로필 들어가기 */}
        <DetailProfile />
        {/* 이미지 */}
        {/* 좋아요 & 댓글 */}
        {/* 글 */}
        {/* 선택한 카테고리 */}
      </div>
    </div>
  )
}

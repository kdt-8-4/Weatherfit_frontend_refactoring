/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    domains: [
      'weatherfit-board-image.s3.amazonaws.com',
      'heesung-s3.s3.ap-northeast-2.amazonaws.com',
      'openweathermap.org',
      'cdn.peacedoorball.blog',
      'cdnimg.melon.co.kr',
      // 외부 url 이미지 로드
      'postfiles.pstatic.net',
      'i.pinimg.com',
    ],
  },
}

import withPlaiceholder from '@plaiceholder/next'

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'weatherfit-board-image.s3.amazonaws.com',
      'heesung-s3.s3.ap-northeast-2.amazonaws.com',
      'openweathermap.org',
      'cdn.peacedoorball.blog',
      'cdnimg.melon.co.kr',
      'www.google.com',
      'image.ytn.co.kr',
      'cdn-icons-png.flaticon.com',
      'image.msscdn.net',
      'static.lookpin.co.kr',
      'i.pinimg.com',
      'thumbnail.10x10.co.kr',
      'encrypted-tbn0.gstatic.com',
      'image.musinsa.com',
    ],
  },
}

export default withPlaiceholder(nextConfig)

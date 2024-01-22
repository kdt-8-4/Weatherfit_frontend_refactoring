import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        gmarketsans: ['GmarketSansMedium'],
        Cafe24SsurroundAir: ['Cafe24SsurroundAir'],
        NanumSquareRound: ['NanumSquareRound'],
        neurimboGothic: ['neurimboGothicRegular'],
      },
      colors:{
        "A8C6EC": "#A8C6EC",
        "F4E58F": "#F4E58F",
        "E4E4E6": "#E4E4E6",
      }
    },
  },
  plugins: [],
}
export default config

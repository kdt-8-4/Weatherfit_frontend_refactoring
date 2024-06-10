import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.openweathermap.org/data/2.5/weather', () => {
    return HttpResponse.json({
      weather: [{ icon: '01d', main: 'Clear' }],
      main: { temp: 23.52, temp_min: 20.73, temp_max: 26.21 },
    })
  }),

  http.get('https://dapi.kakao.com/v2/local/geo/coord2address.json', () => {
    return HttpResponse.json({
      documents: [
        {
          address: {
            region_1depth_name: '서울',
            region_2depth_name: '관악구',
          },
        },
      ],
    })
  }),
]

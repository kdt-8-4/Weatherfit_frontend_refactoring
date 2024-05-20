interface LIKE {
  likeId: number
  nickName: string | null
}

interface BlurData {
  boardId: number
  blurUrl: string
}

interface IMAGE {
  boardId: number
  imageId: number
  imageUrl: string
}

interface BOARDID {
  boardId: string | string[] | undefined
}

interface FEEDDATA {
  boardId: number
  nickName: string
  likeCount: number
  temperature: number
  images: IMAGE
  category: string[]
  hashTag: string[]
  weatherIcon: string
  likelist: LIKE[]
  createDate: string
  modifiedDate: string
}

interface FEEDDATA_detail {
  boardId: number
  images: IMAGE[]
  createDate: string
  likeCount: number
  likelist: LIKE[]
  nickName: string
  temperature: number
  weather: string
  weatherIcon: string
  userImage: string | StaticImport
  content: string
  hashTag: string[]
  category: string[]
  comments: CommentType[]
}

interface SelecList {
  list_id: number
  selectList: string
}

interface TabMenu {
  id: number
  title?: string
  value: string
  selectLists: SelecList[]
}

interface CategoryStore {
  categoryData: TabMenu[]
}

interface CommentType {
  id: number
  boardId: number
  nickname: string
  content: string
  createdDate: string
  createdTime: string
  replyList: CommentType[]
  status: number
}

interface LIKE {
  likeId: number
  nickName: string
}

interface UserData {
  nickname: string
  name: string
  email: string
  password: string
  image: string | null
}

// 위치 데이터에 대한 타입 지정

interface Address {
  address_name: string
  main_address_no: string
  mountain_yn: string
  region_1depth_name: string
  region_2depth_name: string
  region_3depth_name: string
  sub_address_no: string
  zip_code: string
}

interface RoadAddress {
  address_name: string
  building_name: string
  main_building_no: string
  region_1depth_name: string
  region_2depth_name: string
  region_3depth_name: string
  road_name: string
  sub_building_no: string
  underground_yn: string
  zone_no: string
}

interface Document {
  address: Address
  road_address: RoadAddress
}

interface Meta {
  total_count: number
}

interface LocationResponse {
  meta: Meta
  documents: Document[]
}

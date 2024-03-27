interface LIKE {
  likeId: number
  nickName: string
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
}

interface SelecList {
  list_id : number;
  selectList : string;
}


interface TabMenu {
  id: number;
  title?: string;
  value: string;
  selectLists : SelecList[];
}

interface CategoryStore {
  categoryData : TabMenu[];
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
  likeId : number;
  nickName: string;
}
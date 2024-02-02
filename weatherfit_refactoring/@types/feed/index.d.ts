interface LIKE {
    likeId : number;
    nickName: string;
  }
  

interface IMAGE {
    imageId: number;
    boardId: number;
    imageUrl: string;
  }

interface FEEDDATA {
    boardId: number;
    nickName: string;
    likeCount: number;
    temperature: number;
    images: IMAGE;
    category: string[];
    hashTag: string[];
    weatherIcon: string;
    likelist: LIKE[];
    createDate: string;
    modifiedDate: string;
  }


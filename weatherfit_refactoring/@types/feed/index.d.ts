interface LIKE {
    likeId : number;
    nickName: string;
  }
  

interface IMAGE {
    boardId: number;
    imageId: number;
    imageUrl: string;
  }

interface FEEDATA {
    boardId: number;
    images: string;
    createDate: string;
    likeCount: number;
    likelist: LIKE[];
    nickName: string;
    temperature: number;
    weather: string;
    weatherIcon: string;
  }


import { create } from "zustand";

interface IMAGE {
    boardId: number;
    imageId: number;
    imageUrl: string;
  }
  
  interface LIKE {
    likeId : number;
    nickName: string;
  }
  
  interface FEEDATA_ONE {
    boardId: number;
    images: IMAGE;
    createDate: string;
    likeCount: number;
    likelist: LIKE[];
    nickName: string;
    temperature: number;
    weather: string;
    weatherIcon?: string;
  }

  interface FEEDATA {
    feedData : FEEDATA_ONE[] | null;
    setFeedData : (reqFeedData : FEEDATA_ONE[]) => void; 
  }

export const FeedData = create<FEEDATA>((set)=>({
    feedData : null,
    setFeedData : (reqFeedData) => {set(()=>({feedData : reqFeedData}))},
}));
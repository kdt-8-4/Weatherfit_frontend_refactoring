import { create } from "zustand";

  interface FEEDATASTORE {
    feedData : FEEDATA[];
    setFeedData : (reqFeedData : FEEDATA[]) => void; 
  }

export const FeedData = create<FEEDATASTORE>((set)=>({
    feedData : [],
    setFeedData : (reqFeedData) => {set(()=>({feedData : reqFeedData}))},
}));
import { create } from "zustand";

  interface FEEDATASTORE {
    feedData : FEEDDATA[];
    setFeedData : (reqFeedData : FEEDDATA[]) => void; 
  }

export const FeedData = create<FEEDATASTORE>((set)=>({
    feedData : [],
    setFeedData : (reqFeedData) => {set(()=>({feedData : reqFeedData}))},
}));
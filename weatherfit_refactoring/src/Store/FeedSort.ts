import { create } from "zustand";

interface SORT {
    feedSort : string | null;
    setFeedSort : (reqFeedSortTitle:string) => void;
}

export const FeedSort = create<SORT>((set)=>({
    feedSort : "NOW",
    setFeedSort : (reqFeedSortTitle) => {set(()=>({feedSort : reqFeedSortTitle}))},
}));
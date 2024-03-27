import { create } from "zustand";

interface SelectCategory {
    selectData : string[];
    setSelectData : (reqSelectData:string[]) => void;
}

export const CategorySelectData = create<SelectCategory>((set)=>({
    selectData : [],
    setSelectData : (reqSelectData) => {set(()=>({selectData : reqSelectData}))},
}));
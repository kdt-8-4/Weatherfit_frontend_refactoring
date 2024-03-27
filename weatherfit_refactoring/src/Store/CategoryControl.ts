import { create } from "zustand";

interface CategoryControl {
    categoryControl : boolean;
    setCategoryControl : (reqControlnow:boolean) => void;
}

export const CategoryControl = create<CategoryControl>((set)=>({
    categoryControl : false,
    setCategoryControl : (reqControlnow) => {set(()=>({categoryControl : reqControlnow}))},
}));
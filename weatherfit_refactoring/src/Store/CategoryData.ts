
import { create } from "zustand";

interface TabMenu {
    id: number;
    title?: string;
    val: string;
}

interface CategoryStore {
    categoryData : TabMenu[];
}

export const CategoryData = create<CategoryStore>((set)=>({
    categoryData : [
        {
            id: 1,
            title : "상의",
            val : "top"
        },
        {
            id: 2,
            title : "아우터",
            val : "outer"
        },
        {
            id: 3,
            title : "하의",
            val : "pants"
        },
        {
            id: 4,
            title : "신발",
            val : "shoes"
        },
        {
            id: 5,
            title : "가방",
            val : "back"
        },
        {
            id: 6,
            title : "모자",
            val : "hat"
        }
    ]
}));
import { create } from "zustand";

interface TEMP {
    temperature : number | null;
    setTemp : (temp : number) => void;
}

export const WeatherTemp = create<TEMP>((set)=>({
    temperature: null,
    setTemp: (temp) =>{set(()=>({temperature : temp}))},
}));
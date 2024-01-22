import { create } from "zustand";

interface TEMP {
    temperatureMin : number | null;
    setTempMin : (tempMin : number) => void;
}

export const WeatherTempMin = create<TEMP>((set)=>({
    temperatureMin: null,
    setTempMin: (tempMin) =>{set(()=>({temperatureMin : tempMin}))},
}));
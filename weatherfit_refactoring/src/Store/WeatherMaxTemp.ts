import { create } from "zustand";

interface TEMP {
    temperatureMax : number | null;
    setTempMax : (tempMax : number) => void;
}

export const WeatherTempMax = create<TEMP>((set)=>({
    temperatureMax: null,
    setTempMax: (tempMax) =>{set(()=>({temperatureMax : tempMax}))},
}));
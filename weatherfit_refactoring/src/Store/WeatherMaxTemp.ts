import { create } from "zustand";

interface TEMP {
    temperatureMax : number;
    setTempMax : (tempMax : number) => void;
}

export const WeatherTempMax = create<TEMP>((set)=>({
    temperatureMax: 0,
    setTempMax: (tempMax) =>{set(()=>({temperatureMax : tempMax}))},
}));
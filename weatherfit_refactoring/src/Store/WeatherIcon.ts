import { create } from "zustand";

interface ICON {
    weatherIcon : string | null;
    setIcon : (icon:string) => void;
}

export const WeatherIcon = create<ICON>((set)=>({
    weatherIcon : null,
    setIcon : (icon) => {set(()=>({weatherIcon : icon}))},
}));
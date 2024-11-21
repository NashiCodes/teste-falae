import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const verifyUrl = (url: string | undefined) => {
    if (!url) return false;
    try {
        const urlObject = new URL(url);
        return urlObject.protocol === "http:" || urlObject.protocol === "https:";
        
    } catch (error) {
        return false;
    }
}
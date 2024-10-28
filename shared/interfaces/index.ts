import { ClothingSize, ConsoleQuality, ProductQuality, ProductType, VideoGameQuality } from "../types";

export interface Product {
    id: string;
    type?: ProductType;
    quality?: VideoGameQuality | ProductQuality | ConsoleQuality;
    size?: ClothingSize;
    price?: number;
    name?: string;
    description?: string;
    thumbnail?: string;
    rating?: number;
}

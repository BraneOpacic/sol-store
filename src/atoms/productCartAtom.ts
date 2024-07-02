import { ProductWithQuantity } from "@/types/Product";
import { atom } from "jotai";

export const productCartAtom = atom<ProductWithQuantity[]>([]);

import { useState } from "react";
import { useSetAtom } from "jotai";
import { sideDrawerAtom } from "@/atoms/sideDrawerAtom";
import { productCartAtom } from "@/atoms/productCartAtom";
import { Product as IProduct } from "@/types/Product";

export const useProduct = (product: IProduct) => {
  const setIsDrawerOpen = useSetAtom(sideDrawerAtom);
  const setAddToCart = useSetAtom(productCartAtom);

  const [isAdded, setIsAdded] = useState(false);

  const animateButton = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 600);
  };

  const addToCart = () => {
    animateButton();

    setAddToCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        return prevCart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    setIsDrawerOpen(true);
  };

  return {
    isAdded,
    addToCart,
  };
};

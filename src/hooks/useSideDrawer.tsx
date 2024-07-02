import { productCartAtom } from "@/atoms/productCartAtom";
import { sideDrawerAtom } from "@/atoms/sideDrawerAtom";
import { useAtom } from "jotai";
import { useMemo } from "react";

export const useSideDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(sideDrawerAtom);
  const [productsCart, setProductsCart] = useAtom(productCartAtom);

  const incrementQuantity = (id: number) => {
    setProductsCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setProductsCart((currentCart) =>
      currentCart
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const totalPrice = useMemo(() => {
    return productsCart
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);
  }, [productsCart]);

  return {
    isDrawerOpen,
    setIsDrawerOpen,
    productsCart,
    incrementQuantity,
    decrementQuantity,
    totalPrice,
  };
};

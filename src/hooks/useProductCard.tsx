import { useState, useRef, useEffect } from "react";
import { sideDrawerAtom } from "@/atoms/sideDrawerAtom";
import { Product } from "@/types/Product";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { productCartAtom } from "@/atoms/productCartAtom";

const useProductCard = (product: Product) => {
  const router = useRouter();
  const setIsDrawerOpen = useSetAtom(sideDrawerAtom);
  const setAddToCart = useSetAtom(productCartAtom);
  const [isAdded, setIsAdded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { name, description, id, price } = product;

  const animateButton = () => {
    setIsAdded(true);
    timeoutRef.current = setTimeout(() => {
      setIsAdded(false);
      timeoutRef.current = null;
    }, 600);
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

  const handleCardClick = () => {
    router.push(`/product/${id}`);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    name,
    description,
    id,
    price,
    isAdded,
    addToCart,
    handleCardClick,
  };
};

export default useProductCard;

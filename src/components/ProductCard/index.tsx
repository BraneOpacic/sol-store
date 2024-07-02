"use client";

import { sliceText } from "@/helpers/trimText";
import { Product } from "@/types/Product";
import Image from "next/image";
import { tempImageSrc } from "@/helpers/tempImage";
import { AnimatedButton } from "@/components/AnimatedButton";
import useProductCard from "@/hooks/useProductCard";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { name, description, price, isAdded, addToCart, handleCardClick } =
    useProductCard(product);

  return (
    <div className="card glass w-80">
      <figure
        className="cursor-pointer overflow-hidden"
        onClick={handleCardClick}
      >
        <Image width={500} height={450} src={tempImageSrc} alt="Temp image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex flex-wrap min-h-[180px]">
          <p>{sliceText({ text: description })}</p>
          {description.length > 60 && (
            <button
              onClick={handleCardClick}
              className="btn btn-link pl-0 cursor-pointer"
            >
              See more
            </button>
          )}
        </div>
        <div className="card-actions flex justify-between items-center">
          <div className="text-left text-xl font-bold">${price}</div>
          <AnimatedButton
            isAdded={isAdded}
            onClick={() => {
              addToCart();
            }}
          />
        </div>
      </div>
    </div>
  );
};

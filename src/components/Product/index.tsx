"use client";

import { Product as IProduct } from "@/types/Product";
import Image from "next/image";
import { tempImageSrc } from "@/helpers/tempImage";
import { AnimatedButton } from "@/components/AnimatedButton";
import { useProduct } from "@/hooks/useProduct";

export const Product = ({ product }: { product: IProduct }) => {
  const { isAdded, addToCart } = useProduct(product);

  const {
    name,
    features,
    specifications,
    additionalInformation,
    description,
    price,
  } = product;

  return (
    <div className="card-body">
      <div className="text-2xl text-white font-bold mt-4 mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 p-4 rounded-lg shadow-lg flex text-left max-w-96">
        <h1>{name}</h1>
      </div>
      <div className="flex flex-wrap h-[400px] border-2 rounded-md">
        <div className="w-full sm:w-1/2 relative">
          <Image
            src={tempImageSrc}
            alt="Temp image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full sm:w-1/2 flex items-center justify-center px-4">
          <p className="text-sm md:text-xl text-gray-100 my-4">{description}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center card-actions mt-4">
        <span className="text-4xl font-semibold">${price}</span>
        <AnimatedButton
          isAdded={isAdded}
          onClick={() => {
            addToCart();
          }}
        />
      </div>
      <div className="glass p-10 my-10 flex flex-col lg:flex-row rounded-md">
        <div className="w-full lg:w-2/5 flex-grow mb-4 md:mb-0">
          <div className="mt-4 text-gray-100 pr-5">
            <h3 className="text-lg font-semibold">Features:</h3>
            <ul className="list-disc ml-5">
              {features.map((feature, index) => (
                <li key={index} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/5 flex-grow mb-4 md:mb-0">
          <div className="mt-4 text-gray-100">
            <h3 className="text-lg font-semibold">Specifications:</h3>
            <ul className="list-disc ml-5">
              {Object.entries(specifications).map(([key, value], index) => (
                <li key={index} className="text-sm">
                  <strong>{key}:</strong>{" "}
                  {Array.isArray(value) ? value.join(", ") : value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/5 flex-grow">
          <div className="mt-4 text-gray-100">
            <h3 className="text-lg font-semibold">Additional Information:</h3>
            <p className="text-sm">
              <strong>Warranty:</strong> {additionalInformation.warranty}
            </p>
            <ul className="list-disc ml-5">
              <li>
                <strong>In the Box:</strong>
                <ul className="list-disc ml-5">
                  {additionalInformation["In the Box"].map((item, index) => (
                    <li key={index} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

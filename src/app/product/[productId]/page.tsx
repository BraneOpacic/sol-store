import fetchProducts from "@/api/fetchProducts";
import { Product } from "@/components/Product";
import React from "react";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  const products = await fetchProducts();

  const product = products.find((product) => String(product.id) === productId);

  if (!product) return notFound();

  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default ProductPage;

import { Product } from "@/types/Product";

const BASE_URL = "https://61898893be95487994abc2d8b4cf839e.api.mockbin.io/";

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(BASE_URL, {
      next: {
        revalidate: 360, // revalidate every five minutes, otherwise - use cache
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default fetchProducts;

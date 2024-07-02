import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/Product";

export type MainViewProps = {
  products: Product[];
};

const MainView: React.FC<MainViewProps> = ({ products }) => (
  <div className="container mx-auto mt-5">
    <div className="text-3xl text-white font-bold mt-4 mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-4 sm:rounded-lg shadow-lg flex justify-center">
      <h1>Up your lifestyle with these awesome products</h1>
    </div>
    <div className="flex flex-wrap justify-center gap-8 mb-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default MainView;

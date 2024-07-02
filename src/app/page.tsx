import fetchProducts from "@/api/fetchProducts";
import MainView from "@/components/MainView";

const Home = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <MainView products={products} />
    </div>
  );
};

export default Home;

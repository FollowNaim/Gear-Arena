import Products from "@/components/home-products/Products";
import Sliders from "@/components/slider/Sliders";
import { useLoaderData } from "react-router-dom";

function Home() {
  const products = useLoaderData();
  return (
    <div className="mb-20">
      {/* <Hero /> */}
      <Sliders />
      <Products products={products} />
    </div>
  );
}

export default Home;

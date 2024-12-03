import Hero from "@/components/hero/Hero";
import Products from "@/components/home-products/Products";
import { useLoaderData } from "react-router-dom";

function Home() {
  const products = useLoaderData();
  return (
    <div className="mb-20">
      <Hero />
      <Products products={products} />
    </div>
  );
}

export default Home;
